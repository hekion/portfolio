// 1. スクロールに応じて白い襖が開くアニメーション
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 5) {
        document.body.classList.add('open');
    } else {
        document.body.classList.remove('open');
    }
});

// 全データを統合
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

// ギャラリーを描画する関数
function renderGallery() {
    galleryGrid.innerHTML = '';
    
    allWorks.forEach(work => {
        let isHidden = false;

        if (currentMainFilter === 'all') {
            // 初期表示はチラシとWebのみ表示
            isHidden = (work.category !== 'chirashi' && work.category !== 'web');
        } else if (currentMainFilter === 'photo') {
            // 写真が選ばれている場合
            if (work.category === 'photo') {
                if (currentSubFilter !== 'all' && work.subCategory !== currentSubFilter) {
                    return; // 小カテゴリが一致しないものはスキップ
                }
                isHidden = false;
            } else {
                return; // 写真以外は非表示
            }
        } else {
            // その他のメインカテゴリ
            if (work.category !== currentMainFilter) return;
        }

        const workItem = document.createElement('div');
        workItem.className = `work-item ${isHidden ? 'hide' : ''}`;
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
            // 写真切り替え時は小カテゴリを「すべて（写真）」にリセット
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
