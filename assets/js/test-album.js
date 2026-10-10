// アルバムデータの構造サンプル（今後ここにイベント名や旅行名ごとの写真たちを格納していくイメージ）
const albumData = [
    {
        id: 'kawasaki-20260214',
        title: '川崎フロンターレ vs 〇〇 (2026.02.14)',
        category: 'photo',
        categoryName: '写真（イベント）',
        coverImage: 'assets/images/daily/sample1.jpg', // 表紙のサムネイル
        tool: 'Sony α7C II',
        photos: [ // アルバムの中身の写真たち（タイトルなし・画像のみ）
            'assets/images/daily/sample1.jpg',
            'assets/images/daily/sample2.jpg',
            'assets/images/daily/sample3.jpg',
            'assets/images/daily/sample4.jpg'
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
            'assets/images/daily/sample2.jpg',
            'assets/images/daily/sample5.jpg',
            'assets/images/daily/sample1.jpg'
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
            'assets/images/daily/sample3.jpg',
            'assets/images/daily/sample4.jpg',
            'assets/images/daily/sample5.jpg',
            'assets/images/daily/sample1.jpg',
            'assets/images/daily/sample2.jpg'
        ]
    }
];

const galleryGrid = document.querySelector('.gallery-grid');
const galleryMainView = document.getElementById('galleryMainView');
const albumDetailView = document.getElementById('albumDetailView');
const albumDetailTitle = document.getElementById('albumDetailTitle');
const albumPhotosGrid = document.getElementById('albumPhotosGrid');
const backToGalleryBtn = document.getElementById('backToGallery');

// 1. アルバム一覧を描画
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

// 2. アルバムをクリックしたときの挙動（中身ビューに切り替え）
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

// アルバム詳細（中身の写真ずらり）を表示
function showAlbumDetail(album) {
    galleryMainView.style.display = 'none';
    albumDetailView.classList.add('active');
    albumDetailTitle.textContent = album.title;
    
    albumPhotosGrid.innerHTML = '';

    // タイトルなしで画像だけがずらーっと並ぶ
    album.photos.forEach(photoSrc => {
        const photoItem = document.createElement('div');
        photoItem.className = 'album-photo-item';
        photoItem.innerHTML = `<img src="${photoSrc}" alt="写真">`;

        // 写真をクリックしたらモーダルで拡大
        photoItem.onclick = () => {
            modalImg.src = photoSrc;
            modal.classList.add('show');
        };

        albumPhotosGrid.appendChild(photoItem);
    });
}

// 「一覧に戻る」ボタン
backToGalleryBtn.onclick = () => {
    albumDetailView.classList.remove('active');
    galleryMainView.style.display = 'block';
};

// 初期描画
renderAlbumList();

// モーダル関連の処理
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
