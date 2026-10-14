// アルバムデータ（セクション構造 ＆ 日付の新しい順ソート対応）
const albumData = [
    {
        id: 'kawasaki-ft',
        title: '川崎フロンターレ 撮影記録',
        date: '2026.02.16', // 大枠用の代表日付（または最新日付）
        category: 'photo',
        categoryName: '写真（スポーツ）',
        coverImage: 'assets/images/daily/sample1.jpg',
        sections: [
            {
                sectionTitle: '川崎 vs 京都',
                date: '2026.02.16',
                photos: [
                    { src: 'assets/images/daily/sample1.jpg', orientation: 'landscape' },
                    { src: 'assets/images/daily/sample2.jpg', orientation: 'portrait' }
                ]
            },
            {
                sectionTitle: '川崎 vs 横浜FC',
                date: '2025.12.25',
                photos: [
                    { src: 'assets/images/daily/sample3.jpg', orientation: 'landscape' },
                    { src: 'assets/images/daily/sample4.jpg', orientation: 'portrait' }
                ]
            },
            {
                sectionTitle: '川崎 vs ヴィッセル神戸',
                date: '2025.10.05',
                photos: [
                    { src: 'assets/images/daily/sample5.jpg', orientation: 'landscape' },
                    { src: 'assets/images/daily/sample1.jpg', orientation: 'portrait' }
                ]
            }
        ]
    },
    {
        id: 'daily-snaps',
        title: '日常・旅のスナップ断片',
        date: '2026.09.05',
        category: 'photo',
        categoryName: '写真（日常）',
        coverImage: 'assets/images/daily/sample3.jpg',
        sections: [
            {
                sectionTitle: '浅草散歩・その他単発',
                date: '2026.09.05',
                photos: [
                    { src: 'assets/images/daily/sample3.jpg', orientation: 'landscape' },
                    { src: 'assets/images/daily/sample2.jpg', orientation: 'portrait' },
                    { src: 'assets/images/daily/sample4.jpg', orientation: 'portrait' }
                ]
            }
        ]
    }
];

const galleryGrid = document.querySelector('.gallery-grid');
const galleryMainView = document.getElementById('galleryMainView');
const albumDetailView = document.getElementById('albumDetailView');
const albumDetailTitle = document.getElementById('albumDetailTitle');
const albumSectionsContainer = document.getElementById('albumSectionsContainer');
const backToGalleryBtn = document.getElementById('backToGallery');

// アルバム一覧を描画（総写真枚数もセクションから自動計算）
function renderAlbumList() {
    galleryGrid.innerHTML = '';

    albumData.forEach(album => {
        // 全セクションの写真を合算して総枚数を算出
        let totalPhotosCount = 0;
        album.sections.forEach(sec => {
            totalPhotosCount += sec.photos.length;
        });

        const workItem = document.createElement('div');
        workItem.className = 'work-item';

        workItem.innerHTML = `
            <div class="thumbnail-wrapper" data-album-id="${album.id}">
                <img src="${album.coverImage}" alt="${album.title}">
            </div>
            <div class="work-info" style="display: flex; justify-content: space-between; align-items: flex-end;">
                <div>
                    <span class="category-tag">${album.categoryName}</span>
                    <h3 style="margin-bottom: 4px;">${album.title}</h3>
                    <p class="tool-text" style="color: rgba(255,255,255,0.7);">${album.date}</p>
                </div>
                <div style="font-size: 0.8rem; color: var(--gold-color); letter-spacing: 0.05em; white-space: nowrap;">
                    ${totalPhotosCount}枚
                </div>
            </div>
        `;

        galleryGrid.appendChild(workItem);
    });

    bindAlbumClickEvents();
}

// アルバムクリック時のイベント
function bindAlbumClickEvents() {
    const wrappers = galleryGrid.querySelectorAll('.thumbnail-wrapper');
    wrappers.forEach(wrapper => {
        wrapper.onclick = () => {
            const albumId = wrapper.getAttribute('data-album-id');
            const targetAlbum = albumData.find(a => a.id === albumId);

            if (targetAlbum) {
                showAlbumDetail(targetAlbum);
            }
        };
    });
}

// アルバム詳細（セクション＆パズル形式）を表示
function showAlbumDetail(album) {
    galleryMainView.style.display = 'none';
    albumDetailView.classList.add('active');
    albumDetailTitle.textContent = album.title;
    
    albumSectionsContainer.innerHTML = '';

    // セクション内の日付を新しい順（降順）に並び替える
    const sortedSections = [...album.sections].sort((a, b) => {
        return new Date(b.date.replace(/\./g, '/')) - new Date(a.date.replace(/\./g, '/'));
    });

    // セクションごとにブロックを生成して描画
    sortedSections.forEach(section => {
        const sectionBlock = document.createElement('div');
        sectionBlock.className = 'album-section-block';

        let photosHtml = '';
        section.photos.forEach(photo => {
            photosHtml += `
                <div class="album-photo-item ${photo.orientation}" onclick="openModal('${photo.src}')">
                    <img src="${photo.src}" alt="写真">
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

    // ページの一番上にスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// モーダルを開く共通関数
function openModal(src) {
    modalImg.src = src;
    modal.classList.add('show');
}

// 一覧に戻るボタン
backToGalleryBtn.onclick = () => {
    albumDetailView.classList.remove('active');
    galleryMainView.style.display = 'block';

    // 一覧に戻ったときもページの一番上にスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 初期描画
renderAlbumList();

// モーダル制御
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.querySelector('.modal-close');

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
