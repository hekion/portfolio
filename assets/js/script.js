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
    ...photoData.map(item => ({ ...item, category: 'photo' })),
    ...thumbData.map(item => ({ ...item, category: 'thumb', categoryName: 'サムネイル' })),
    ...videoData.map(item => ({ ...item, category: 'video', categoryName: '動画編集' })),
    ...webData.map(item => ({ ...item, category: 'web', categoryName: 'ウェブサイト' }))
];

const galleryGrid = document.querySelector('.gallery-grid');
const galleryMainView = document.getElementById('galleryMainView');
const albumDetailView = document.getElementById('albumDetailView');
const albumDetailTitle = document.getElementById('albumDetailTitle');
const albumSectionsContainer = document.getElementById('albumSectionsContainer');
const backToGalleryBtn = document.getElementById('backToGallery');

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
    // アルバム詳細が表示中なら一覧に戻す
    albumDetailView.classList.remove('active');
    galleryMainView.style.display = 'block';

    galleryGrid.innerHTML = '';
    
    let worksToDisplay = [];

    if (currentMainFilter === 'all') {
        const categories = ['chirashi', 'photo', 'thumb', 'video', 'web'];
        
        categories.forEach(cat => {
            const catWorks = allWorks.filter(w => w.category === cat);
            const shuffledCatWorks = shuffleArray(catWorks);
            const limitedWorks = shuffledCatWorks.slice(0, 10);
            worksToDisplay.push(...limitedWorks);
        });

        worksToDisplay = shuffleArray(worksToDisplay);

    } else if (currentMainFilter === 'photo') {
        const photoWorks = allWorks.filter(w => w.category === 'photo');
        
        if (currentSubFilter === 'all') {
            worksToDisplay = shuffleArray(photoWorks);
        } else {
            const subWorks = photoWorks.filter(w => w.sub === currentSubFilter);
            worksToDisplay = shuffleArray(subWorks);
        }

    } else {
        const categoryWorks = allWorks.filter(w => w.category === currentMainFilter);
        worksToDisplay = shuffleArray(categoryWorks);
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
            // アルバム形式（クリックでセクション付き詳細を開く）
            contentHTML = `
                <div class="thumbnail-wrapper" data-album-id="${work.id}">
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

    bindAlbumClickEvents();
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

// 4. アルバムクリック時のイベント
function bindAlbumClickEvents() {
    const wrappers = galleryGrid.querySelectorAll('.thumbnail-wrapper[data-album-id]');
    wrappers.forEach(wrapper => {
        wrapper.onclick = () => {
            const albumId = wrapper.getAttribute('data-album-id');
            const targetAlbum = photoData.find(a => a.id === albumId);

            if (targetAlbum && targetAlbum.sections) {
                showAlbumDetail(targetAlbum);
            }
        };
    });
}

// アルバム詳細（セクション＆グリッド形式）を表示
function showAlbumDetail(album) {
    galleryMainView.style.display = 'none';
    albumDetailView.classList.add('active');
    albumDetailTitle.textContent = album.title;
    
    albumSectionsContainer.innerHTML = '';

    // セクション内の日付を新しい順（降順）に並び替える
    const sortedSections = [...album.sections].sort((a, b) => {
        return new Date(b.date.replace(/\./g, '/')) - new Date(a.date.replace(/\./g, '/'));
    });

    sortedSections.forEach(section => {
        const sectionBlock = document.createElement('div');
        sectionBlock.className = 'album-section-block';

        let photosHtml = '';
        section.photos.forEach(photoSrc => {
            photosHtml += `
                <div class="album-photo-item" onclick="openModal('${photoSrc}')">
                    <img src="${photoSrc}" alt="写真">
                </div>
            `;
        });

        sectionBlock.innerHTML = `
            <div class="section-header">
                <h3 class="section-title">${section.sectionTitle}</h3>
                <span class="section-date">${section.date}</span>
            </div>
            <div class="album-photos-grid">
                ${photosHtml}
            </div>
        `;

        albumSectionsContainer.appendChild(sectionBlock);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 一覧に戻るボタン
backToGalleryBtn.onclick = () => {
    albumDetailView.classList.remove('active');
    galleryMainView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 5. 画像拡大表示用モーダル機能
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.querySelector('.modal-close');

function openModal(src) {
    modalImg.src = src;
    modal.classList.add('show');
}

function bindModalEvents() {
    const thumbnailWrappers = galleryGrid.querySelectorAll('.thumbnail-wrapper:not([data-album-id])');
    thumbnailWrappers.forEach(wrapper => {
        wrapper.onclick = () => {
            if (wrapper.closest('a')) {
                return;
            }
            const img = wrapper.querySelector('img');
            if (img && img.src) {
                openModal(img.src);
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
