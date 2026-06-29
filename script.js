document.addEventListener('DOMContentLoaded', () => {
    
    // 演出①：メインタイトルを1文字ずつ時間差で現れさせる
    const typewriter = document.getElementById('typewriter');
    if (typewriter) {
        const text = typewriter.textContent;
        typewriter.textContent = ''; // 一度文字を消す
        
        // 1文字ずつ<span>タグに分解して配置
        for (let char of text) {
            const span = document.createElement('span');
            span.textContent = char;
            span.className = 'char';
            typewriter.appendChild(span);
        }
        
        // 時間差で順番にクラスをつけて表示させる
        const chars = typewriter.querySelectorAll('.char');
        chars.forEach((char, index) => {
            setTimeout(() => {
                char.classList.add('fade');
            }, index * 150); // 150ms間隔で1文字ずつ表示
        });
    }

    // 演出②：スクロール連動でフェードインさせる仕組み
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const scrollFade = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // 画面の8割くらいの位置まで要素が来たら表示
            if (elementTop < windowHeight * 0.85) {
                element.classList.add('visible');
            }
        });
    };
    
    // 最初の一回を実行し、あとはスクロールするたびに実行
    scrollFade();
    window.addEventListener('scroll', scrollFade);
});
