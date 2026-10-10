// 1. スクロールに応じて白い襖が開くアニメーション
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 5) {
        document.body.classList.add('open');
    } else {
        document.body.classList.remove('open');
    }
});

// 全データを統合してメタ情報を付与
const allWorks = [
    ...chirashiData.map(item => ({ ...item, category: 'chirashi', categoryName: 'チラシ・POP' })),
    ...photoData.map(item => ({ 
        ...item, 
        category: 'photo', 
        categoryName: item.sub === 'landscape' ? '写真（風景）' :
                      item.sub === 'food' ? '写真（食べ物）' :
                      item.sub === 'sports' ? '写真（スポーツ）' :
                      item.sub === 'people' ? '写真（人物）' : '写真（その他）',
        subCategory: item.sub 
    })),
    ...thumbData.map(item => ({ ...item, category: 'thumb', categoryName: 'サムネイル' })),
    ...videoData.map(item => ({ ...item, category: 'video', categoryName: '動画編集' })),
    ...webData.map(item => ({ ...item, category: 'web', categoryName: 'ウェブサイト' }))
];

const galleryGrid = document.querySelector('.gallery-grid');
const subFilterContainer = document.getElementById('subFilterContainer');
const filterButtons = document.querySelectorAll('.filter-btn');
const subFilterButtons = document.querySelectorAll('.sub-filter-btn');

let currentMainFilter = 'all';
let currentSubFilter = 'all';

// 配列をランダムにシャッフルする関数（Fisher-Yatesアルゴリズム）
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ギャラリーを描画する関数
function renderGallery() {
    galleryGrid.innerHTML = '';
    
    let worksToDisplay = [];

    if (currentMainFilter === 'all') {
        // 「すべて」のとき：カテゴリごとにシャッフルして最大10作品ずつ抽出し、最後に全体を混ぜる
        const categories = ['chirashi', 'photo', 'thumb', 'video', 'web'];
        
        categories.forEach(cat => {
            const catWorks = allWorks.filter(w => w.category === cat);
            const shuffledCatWorks = shuffleArray(catWorks);
            const limitedWorks = shuffledCatWorks.slice(0, 10); // 最大10作品
            worksToDisplay.push(...limitedWorks);
        });

        // 抽出された全カテゴリの作品をさらにシャッフルしてごちゃ混ぜにする
        worksToDisplay = shuffleArray(worksToDisplay);

    } else if (currentMainFilter === 'photo') {
        // 「写真」大カテゴリが選ばれている場合
        const photoWorks = allWorks.filter(w => w.category === 'photo');
        
        if (currentSubFilter === 'all') {
            // 写真の「すべて」：全写真の中からランダムにシャッフルして表示
            worksToDisplay = shuffleArray(photoWorks);
        } else {
            // 写真の小カテゴリ（風景、食べ物など）：該当するものを抽出してシャッフル
            const subWorks = photoWorks.filter(w => w.subCategory === currentSubFilter);
            worksToDisplay = shuffleArray(subWorks);
        }

    } else {
        // その他の大カテゴリ（チラシ、サムネイル、動画、ウェブ）
        const categoryWorks = allWorks.filter(w => w.category === currentMainFilter);
        worksToDisplay = shuffleArray(categoryWorks);
    }

    // カードを生成して配置
    worksToDisplay.forEach(work => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item';
        workItem.setAttribute('data-category', work.category);

        let contentHTML = '';
        if (work.link) {
            contentHTML = `
                <a href="${work.link}" target="_blank" class="work-link">
                    <div class="thumbnail-wrapper">
                        <img src="${work.image}" alt="${work.title}">
                    </div>
                    <div class="work-info">
                        <span class="category-tag">${work.categoryName}</span>
                        <h3>${work.title}</h3>
                        <p class="tool-text">${work.tool}</p>
                    </div>
                </a>
            `;
        } else {
            contentHTML = `
                <div class="thumbnail-wrapper">
                    <img src="${work.image}" alt="${work.title}">
                </div>
                <div class="work-info">
                    <span class="category-tag">${work.categoryName}</span>
                    <h3>${work.title}</h3>
                    <p class="tool-text">${work.tool}</p>
                </div>
            `;
        }

        workItem.innerHTML = contentHTML;
        galleryGrid.appendChild(workItem);
    });

    bindModalEvents();
}

// 初期描画
renderGallery();

// 2. メインフィルターボタンの制御
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentMainFilter = btn.getAttribute('data-filter');

        // 「写真」が選ばれた時だけ小カテゴリボタンを表示、それ以外は隠す
        if (currentMainFilter === 'photo') {
            subFilterContainer.classList.add('show');
            subFilterButtons.forEach(b => b.classList.remove('active'));
            subFilterButtons[0].classList.add('active');
            currentSubFilter = 'all';
        } else {
            subFilterContainer.classList.remove('show');
        }

        renderGallery();
    });
});

// 3. 写真の小カテゴリボタンの制御
subFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        subFilterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentSubFilter = btn.getAttribute('data-sub');
        renderGallery();
    });
});

// 4. 画像クリック時の拡大表示（モーダル）機能
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.querySelector('.modal-close');

function bindModalEvents() {
    const thumbnailWrappers = document.querySelectorAll('.thumbnail-wrapper');
    thumbnailWrappers.forEach(wrapper => {
        wrapper.onclick = () => {
            if (wrapper.closest('a')) {
                return;
            }
            const img = wrapper.querySelector('img');
            if (img && img.src) {
                modalImg.src = img.src;
                modal.classList.add('show');
            }
        };
    });
}

if (modalClose) {
    modalClose.onclick = () => {
        modal.classList.remove('show');
    };
}

if (modal) {
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    };
}
