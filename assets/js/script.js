// 1. スクロールに応じて白い襖が開くアニメーション
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 5) {
        document.body.classList.add('open');
    } else {
        document.body.classList.remove('open');
    }
});

// 全データを統合して明示的に正しい category を付与
const allWorks = [
    ...chirashiData.map(item => ({ ...item, category: 'chirashi', categoryName: 'チラシ・POP' })),
    ...photoData.map(item => ({ ...item, category: 'photo' })),
    ...thumbData.map(item => ({ ...item, category: 'thumb', categoryName: 'サムネイル' })),
    ...videoData.map(item => ({ ...item, category: 'video', categoryName: '動画編集' })),
    ...webData.map(item => ({ ...item, category: 'web', categoryName: 'ウェブサイト' }))
];

const galleryGrid = document.querySelector('.gallery-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentMainFilter = 'all';

// ギャラリーを描画する関数
function renderGallery() {
    galleryGrid.innerHTML = '';
    
    let worksToDisplay = [];

    if (currentMainFilter === 'all') {
        const categories = ['chirashi', 'photo', 'thumb', 'video', 'web'];
        categories.forEach(cat => {
            const catWorks = allWorks.filter(w => w.category === cat);
            worksToDisplay.push(...catWorks);
        });
    } else {
        worksToDisplay = allWorks.filter(w => w.category === currentMainFilter);
    }

    // カードを生成して配置
    worksToDisplay.forEach(work => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item';
        workItem.setAttribute('data-category', work.category);

        let totalPhotosCount = 0;
        if (work.sections) {
            work.sections.forEach(sec => {
                totalPhotosCount += sec.photos.length;
            });
        }

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
        } else if (work.sections) {
            // アルバム形式（クリックで独立した photo-album.html へジャンプ）
            contentHTML = `
                <a href="photo-album.html?id=${work.id}" class="work-link" style="text-decoration: none; color: inherit; display: block;">
                    <div class="thumbnail-wrapper">
                        <img src="${work.image}" alt="${work.title}">
                    </div>
                    <div class="work-info" style="display: flex; justify-content: space-between; align-items: flex-end;">
                        <div>
                            <span class="category-tag">${work.categoryName}</span>
                            <h3 style="margin-bottom: 4px;">${work.title}</h3>
                            <p class="tool-text" style="color: rgba(255,255,255,0.7);">${work.date}</p>
                        </div>
                        <div style="font-size: 0.8rem; color: var(--gold-color); letter-spacing: 0.05em; white-space: nowrap;">
                            ${totalPhotosCount}枚
                        </div>
                    </div>
                </a>
            `;
        } else {
            // 単発の通常作品
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
        renderGallery();
    });
});

// 3. 画像拡大表示用モーダル機能（単発作品用）
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.querySelector('.modal-close');

function bindModalEvents() {
    const thumbnailWrappers = galleryGrid.querySelectorAll('.thumbnail-wrapper:not([data-album-id])');
    thumbnailWrappers.forEach(wrapper => {
        // アルバム以外のサムネイルをクリックしたとき
        if (!wrapper.closest('a')) {
            wrapper.onclick = () => {
                const img = wrapper.querySelector('img');
                if (img && img.src) {
                    modalImg.src = img.src;
                    modal.classList.add('show');
                }
            };
        }
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
