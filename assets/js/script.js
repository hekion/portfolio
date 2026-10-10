// 1. スクロールに応じて白い襖が開くアニメーション
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 5) {
        document.body.classList.add('open');
    } else {
        document.body.classList.remove('open');
    }
});

// 2. 絞り込み機能の制御
const filterButtons = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        workItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});

// 3. 画像クリック時の拡大表示（モーダル）機能
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.querySelector('.modal-close');
const thumbnailWrappers = document.querySelectorAll('.thumbnail-wrapper');

thumbnailWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', () => {
        // ウェブサイトなど、親にリンク（aタグ）があるものはモーダルを開かず通常遷移させる
        if (wrapper.closest('a')) {
            return;
        }

        const img = wrapper.querySelector('img');
        if (img && img.src) {
            modal.classList.add('show');
            modalImg.src = img.src;
        }
    });
});

// 閉じるボタンまたは背景クリックでモーダルを閉じる
if (modalClose) {
    modalClose.addEventListener('click', () => {
        modal.classList.remove('show');
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}
