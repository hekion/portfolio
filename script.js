document.addEventListener('DOMContentLoaded', () => {
    
    // 演出①：メインタイトルを1文字ずつ時間差で現れさせる
    const typewriter = document.getElementById('typewriter');
    if (typewriter) {
        const text = typewriter.textContent;
        typewriter.textContent = ''; 
        
        for (let char of text) {
            const span = document.createElement('span');
            span.textContent = char;
            span.className = 'char';
            typewriter.appendChild(span);
        }
        
        const chars = typewriter.querySelectorAll('.char');
        chars.forEach((char, index) => {
            setTimeout(() => {
                char.classList.add('fade');
            }, index * 150); 
        });
    }

    // 演出②：スクロール連動でフェードインさせる仕組み
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const scrollFade = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                element.classList.add('visible');
            }
        });
    };
    
    scrollFade();
    window.addEventListener('scroll', scrollFade);

    // 演出③：画像クリック時の拡大表示（モーダル表示）機能
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalClose = document.querySelector('.modal-close');
    const workItems = document.querySelectorAll('.work-item');

    workItems.forEach(item => {
        // WEBサイトカテゴリなどリンク付きカードはモーダルを開かない処理
        if (item.querySelector('.work-link')) return;

        item.addEventListener('click', () => {
            const img = item.querySelector('.thumbnail-wrapper img');
            if (img && modal && modalImg) {
                modalImg.src = img.src;
                modalImg.alt = img.alt;
                modal.classList.add('active');
            }
        });
    });

    // 閉じるボタンをクリックでモーダルを非表示
    if (modalClose && modal) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // モーダルの背景エリアクリックで閉じる
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});
