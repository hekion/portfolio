// 1. スクロールに応じて白い襖が開くアニメーション
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 10) {
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
        // アクティブクラスの切り替え
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
