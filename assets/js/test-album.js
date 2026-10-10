// アルバムデータ（各写真の向き情報を保持）
const albumData = [
    {
        id: 'kawasaki-20260214',
        title: '川崎フロンターレ vs 〇〇 (2026.02.14)',
        category: 'photo',
        categoryName: '写真（イベント）',
        coverImage: 'assets/images/daily/sample1.jpg',
        tool: 'Sony α7C II',
        photos: [
            { src: 'assets/images/daily/sample1.jpg', orientation: 'landscape' }, // 横長
            { src: 'assets/images/daily/sample2.jpg', orientation: 'portrait' },  // 縦長
            { src: 'assets/images/daily/sample3.jpg', orientation: 'landscape' }, // 横長
            { src: 'assets/images/daily/sample4.jpg', orientation: 'portrait' }   // 縦長
        ]
    },
    {
        id: 'health-festa',
        title: '健康長寿フェスタ',
        category: 'photo',
        categoryName: '写真（イベント）',
        coverImage: 'assets/images/daily/sample2.jpg',
        tool: 'Sony α7C II',
        photos: [
            { src: 'assets/images/daily/sample2.jpg', orientation: 'portrait' },
            { src: 'assets/images/daily/sample5.jpg', orientation: 'landscape' },
            { src: 'assets/images/daily/sample1.jpg', orientation: 'landscape' }
        ]
    },
    {
        id: 'kusatsu-trip',
        title: '草津温泉旅行 2026.09',
        category: 'photo',
        categoryName: '写真（旅行）',
        coverImage: 'assets/images/daily/sample3.jpg',
        tool: 'Sony α7C II',
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
            <div class="work-info">
                <span class="category-tag">${album.categoryName}</span>
                <h3>${album.title}</h3>
                <p class="tool-text">${album.tool} (写真 ${album.photos.length}枚)</p>
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
    albumDetailTitle.textContent = album.title;
    
    albumPhotosGrid.innerHTML = '';

    // パズル状に写真を配置
    album.photos.forEach(photo => {
        const photoItem = document.createElement('div');
        photoItem.className = `album-photo-item ${photo.orientation}`;
        photoItem.innerHTML = `<img src="${photo.src}" alt="写真">`;

        // クリックで拡大
        photoItem.onclick = () => {
            modalImg.src = photo.src;
            modal.classList.add('show');
        };

        albumPhotosGrid.appendChild(photoItem);
    });
}

// 一覧に戻るボタン
backToGalleryBtn.onclick = () => {
    albumDetailView.classList.remove('active');
    galleryMainView.style.display = 'block';
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
