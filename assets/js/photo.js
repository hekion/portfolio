const photoData = [
    // ① 川崎フロンターレ撮影
    {
        id: 'kawasaki-ft',
        title: '川崎フロンターレ',
        date: '2026.10.03',
        categoryName: '写真（スポーツ）',
        image: 'assets/images/photo/pedro-romano.jpg',
        sub: 'sports',
        sections: [
            {
                sectionTitle: 'vs U-21 東京ヴェルディ',
                date: '2026.10.03',
                photos: [

                ] // 枠のみ（後から追加）
            },
            {
                sectionTitle: 'vs 京都サンガF.C.',
                date: '2026.08.15',
                photos: [
                    "assets/images/photo/pedro-romano.jpg",
                    "assets/images/photo/miyagi-ten.jpg"
                ]
            },
            {
                sectionTitle: 'vs FC町田ゼルビア',
                date: '2026.05.17',
                photos: [
                    "assets/images/photo/ito-tatsuya.jpg",
                    "assets/images/photo/yamaguchi-rui.jpg"
                ]
            }
        ]
    },

    // ② その他スポーツ撮影
    {
        id: 'other-sports',
        title: 'その他スポーツ',
        date: '2026.09.12',
        categoryName: '写真（スポーツ）',
        image: 'assets/images/photo/yamasaki-yasuaki.jpg',
        sub: 'sports',
        sections: [
            {
                sectionTitle: '横浜F・マリノス vs FC町田ゼルビア',
                date: '2026.09.12',
                photos: [
                    "assets/images/photo/soma-yuki.jpg"
                ]
            },
            {
                sectionTitle: '横浜DeNAベイスターズ vs オリックス・バファローズ',
                date: '2026.05.28',
                photos: [
                    "assets/images/photo/yamasaki-yasuaki.jpg",
                    "assets/images/photo/yoshida-kousei.jpg",
                    "assets/images/photo/azuma-katsuki.jpg"
                ]
            }
        ]
    },

    // ③ 人物
    {
        id: 'people-album',
        title: '人物撮影',
        date: '2026.08.15',
        categoryName: '写真（人物）',
        image: 'assets/images/photo/kamimura-hinano.jpg',
        sub: 'people',
        sections: [
            {
                sectionTitle: '川崎フロンターレ始球式',
                date: '2026.08.15',
                photos: [
                    "assets/images/photo/tomita-suzuka.jpg"
                ]
            },
            {
                sectionTitle: 'ワールドカップ開幕直前イベント',
                date: '2026.06.10',
                photos: [
                    "assets/images/photo/kageyama-yuka.jpg",
                    "assets/images/photo/kageyama-yuka02.jpg"
                ]
            },
            {
                sectionTitle: '日向坂×DeNAコラボイベント',
                date: '2026.05.28',
                photos: [
                    "assets/images/photo/kamimura-hinano.jpg",
                    "assets/images/photo/kosaka-nao.jpg"
                ]
            }
        ]
    },

    // ④ 動物
    {
        id: 'animals',
        title: '動物',
        date: '2026.01.01',
        categoryName: '写真（その他）',
        image: 'assets/images/photo/kawauso.jpg',
        sub: 'other',
        sections: [
            {
                sectionTitle: '動物たち',
                date: '',
                photos: [
                    "assets/images/photo/kawauso.jpg"
                ]
            }
        ]
    },

    // ⑤ 食べ物
    {
        id: 'food-album',
        title: '食べ物・グルメ',
        date: '2026.01.01',
        categoryName: '写真（食べ物）',
        image: 'assets/images/photo/shihachi-02.jpg',
        sub: 'food',
        sections: [
            {
                sectionTitle: 'シハチ鮮魚店',
                date: '',
                photos: [
                    "assets/images/photo/shihachi-01.jpg",
                    "assets/images/photo/shihachi-02.jpg"
                ]
            }
        ]
    },

    // ⑥ 風景(スポット)
    {
        id: 'spots-landscape',
        title: '風景・スポット',
        date: '2026.09.01',
        categoryName: '写真（風景）',
        image: 'assets/images/photo/jingu-namiki.jpg',
        sub: 'landscape',
        sections: [
            {
                sectionTitle: '香川周辺',
                date: '2026.09',
                photos: [
                    "assets/images/photo/takamatsu-syoudoshima.jpg"
                ]
            },
            {
                sectionTitle: '北海道',
                date: '2026.08',
                photos: [
                    "assets/images/photo/sapporo-televitou.jpg",
                    "assets/images/photo/susukino-01.jpg",
                    "assets/images/photo/susukino-02.jpg",
                    "assets/images/photo/escon-01.jpg",
                    "assets/images/photo/escon-02.jpg",
                    "assets/images/photo/yuni-02.jpg",
                    "assets/images/photo/yuni-03.jpg"
                ]
            },
            {
                sectionTitle: 'ディズニーシー',
                date: '',
                photos: [
                    "assets/images/photo/disneysea20260708-01.jpg",
                    "assets/images/photo/disneysea20260708-06.jpg",
                    "assets/images/photo/disneysea20260708-07.jpg",
                    "assets/images/photo/disneysea20260708-08.jpg",
                    "assets/images/photo/disneysea20260708-09.jpg"
                ]
            },
            {
                sectionTitle: 'その他スポット',
                date: '',
                photos: [
                    "assets/images/photo/sensoji.jpg",
                    "assets/images/photo/ginza-tokei.jpg",
                    "assets/images/photo/toji-kyoto.jpg",
                    "assets/images/photo/jingu-namiki.jpg",
                    "assets/images/photo/kadokawa-01.jpg",
                    "assets/images/photo/kadokawa-02.jpg",
                    "assets/images/photo/hanabiyori-01.jpg",
                    "assets/images/photo/hanabiyori-02.jpg"
                ]
            }
        ]
    },

    // ⑦ 各種旅行アルバム
    {
        id: 'travel-album',
        title: '各種旅行アルバム',
        date: '2026.01.01',
        categoryName: '写真（風景）',
        image: 'assets/images/photo/karuizawa.jpg',
        sub: 'landscape',
        sections: [
            {
                sectionTitle: '軽井沢旅行',
                date: '2025.11',
                photos: [
                    "assets/images/photo/karuizawa.jpg"
                ]
            },
            {
                sectionTitle: '群馬旅行',
                date: '2026.09',
                photos: [
                    "assets/images/photo/yamba-01.jpg",
                    "assets/images/photo/yamba-02.jpg",
                    "assets/images/photo/kusatsu-01.jpg",
                    "assets/images/photo/kusatsu-02.jpg",
                    "assets/images/photo/kusatsu-03.jpg"
                ]
            },
            {
                sectionTitle: '伊豆旅行',
                date: '2025.03',
                photos: [
                    "assets/images/photo/kawazu.jpg"
                ]
            }
        ]
    },

    // ⑧ イベント撮影
    {
        id: 'events-album',
        title: 'イベント撮影',
        date: '2026.06.14',
        categoryName: '写真（その他）',
        image: 'assets/images/photo/tyouzyu-prowres.jpg',
        sub: 'other',
        sections: [
            {
                sectionTitle: 'キッズスポーツフェスタ',
                date: '2026.06.14',
                photos: [
                    "assets/images/photo/tyouzyu-ampty.jpg",
                    "assets/images/photo/tyouzyu-boxing.JPG",
                    "assets/images/photo/tyouzyu-bs.jpg",
                    "assets/images/photo/tyouzyu-dena.jpg",
                    "assets/images/photo/tyouzyu-kids.jpg",
                    "assets/images/photo/tyouzyu-lacrosse.JPG",
                    "assets/images/photo/tyouzyu-mizutori.jpg",
                    "assets/images/photo/tyouzyu-nec.jpg",
                    "assets/images/photo/tyouzyu-nec02.jpg",
                    "assets/images/photo/tyouzyu-nec03.jpg",
                    "assets/images/photo/tyouzyu-prowres.jpg"
                ]
            }
        ]
    },

    // ⑨ 植物
    {
        id: 'plants-album',
        title: '植物・自然',
        date: '2026.01.01',
        categoryName: '写真（風景）',
        image: 'assets/images/photo/azisai-blue.jpg',
        sub: 'landscape',
        sections: [
            {
                sectionTitle: '植物',
                date: '',
                photos: [
                    "assets/images/photo/yuni-01.jpg",
                    "assets/images/photo/yuni-04.jpg",
                    "assets/images/photo/yuni-05.jpg",
                    "assets/images/photo/disneysea20260708-02.jpg",
                    "assets/images/photo/disneysea20260708-03.jpg",
                    "assets/images/photo/disneysea20260708-04.jpg",
                    "assets/images/photo/disneysea20260708-05.jpg",
                    "assets/images/photo/azisai-blue.jpg",
                    "assets/images/photo/hanasyoubu.jpg"
                ]
            }
        ]
    },

    // ⑩ その他
    {
        id: 'other-album',
        title: 'その他',
        date: '2026.01.01',
        categoryName: '写真（風景）',
        image: 'assets/images/photo/haneda-airdorokon.jpg',
        sub: 'landscape',
        sections: [
            {
                sectionTitle: '飛行機',
                date: '2026.01.01',
                photos: [
                    "assets/images/photo/haneda-anapokemon.jpg",
                    "assets/images/photo/haneda-delta.jpg",
                    "assets/images/photo/haneda-solaseed.jpg",
                    "assets/images/photo/haneda-airdorokon.jpg",
                    "assets/images/photo/haneda-ana.jpg"
                ]
            }
        ]
    }
];
