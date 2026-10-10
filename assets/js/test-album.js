// アルバムデータ
const albumData = [
    {
        id: 'kawasaki-20260214',
        title: '川崎フロンターレ vs 横浜F・マリノス',
        date: '2026.02.14',
        category: 'photo',
        categoryName: '写真（イベント）',
        coverImage: 'assets/images/daily/sample1.jpg',
        photos: [
            { src: 'assets/images/daily/sample1.jpg', orientation: 'landscape' },
            { src: 'assets/images/daily/sample2.jpg', orientation: 'portrait' },
            { src: 'assets/images/daily/sample3.jpg', orientation: 'landscape' },
            { src: 'assets/images/daily/sample4.jpg', orientation: 'portrait' }
        ]
    },
    {
        id: 'health-festa',
        title: '健康長寿フェスタ 撮影レポート',
        date: '2026.05.20',
        category: 'photo',
        categoryName: '写真（イベント）',
        coverImage: 'assets/images/daily/sample2.jpg',
        photos: [
            { src: 'assets/images/daily/sample2.jpg', orientation: 'portrait' },
            { src: 'assets/images/daily/sample5.jpg', orientation: 'landscape' },
            { src: 'assets/images/daily/sample1.jpg', orientation: 'landscape' }
        ]
    },
    {
        id: 'kusatsu-trip',
        title: '草津温泉 旅の記録',
        date: '2026.09.05',
        category: 'photo',
        categoryName: '写真（旅行）',
        coverImage: 'assets/images/daily/sample3.jpg',
        photos: [
            { src: 'assets/images/daily/sample3.jpg', orientation: 'landscape' },
            { src: 'assets/images/daily/sample4.jpg', orientation: 'portrait' },
            { src: 'assets/images/daily/sample5.jpg', orientation: 'portrait' },
            { src: 'assets/images/daily/sample1.jpg', orientation: 'landscape' }
        ]
    }
];

const galleryGrid = document.querySelector('.gallery-grid');
const galleryMainView = document.getElementById('galleryMainView');
const albumDetailView = document.getElementById('albumDetailView');
const albumDetailTitle = document.getElementById('albumDetailTitle');
const albumPhotosGrid = document.getElementById('albumPhotosGrid');
const backToGalleryBtn = document.getElementById('backToGallery');

// アルバム一覧を描画
function renderAlbumList() {
    galleryGrid.innerHTML = '';

    albumData.forEach(album => {
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
                    ${album.photos.length}枚
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

// アルバム詳細（パズル形式）を表示
function showAlbumDetail(album) {
    galleryMainView.style.display = 'none';
    albumDetailView.classList.add('active');
    albumDetailTitle.textContent = `${album.title} (${album.date})`;
    
    albumPhotosGrid.innerHTML = '';

    album.photos.forEach(photo => {
        const photoItem = document.createElement('div');
        photoItem.className = `album-photo-item ${photo.orientation}`;
        photoItem.innerHTML = `<img src="${photo.src}" alt="写真">`;

        photoItem.onclick = () => {
            modalImg.src = photo.src;
            modal.classList.add('show');
        };

        albumPhotosGrid.appendChild(photoItem);
    });

    // ★ アルバムを開いたときにページの一番上にスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 一覧に戻るボタン
backToGalleryBtn.onclick = () => {
    albumDetailView.classList.remove('active');
    galleryMainView.style.display = 'block';

    // ★ 一覧に戻ったときもページの一番上にスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 初期描画
renderAlbumList();

// モーダル
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
