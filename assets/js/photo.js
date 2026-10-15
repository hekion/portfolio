const photoData = [
    // ① 川崎フロンターレ撮影
    {
        id: 'kawasaki-ft',
        title: '川崎フロンターレ',
        date: '2026.10.03',
        categoryName: '写真（スポーツ）',
        image: 'assets/images/photo/pedro-romano.jpg',
        sections: [
            {
                sectionTitle: 'vs U-21 東京ヴェルディ',
                date: '2026.10.03',
                photos: [
                    "assets/images/photo/DSC04014.jpg",
                    "assets/images/photo/DSC04046.jpg",
                    "assets/images/photo/DSC04047.jpg",
                    "assets/images/photo/DSC04049.jpg",
                    "assets/images/photo/DSC04075.jpg",
                    "assets/images/photo/DSC04079.jpg",
                    "assets/images/photo/DSC04080.jpg"
                ]
            },
            {
                sectionTitle: 'vs 京都サンガF.C.',
                date: '2026.08.15',
                photos: [
                    "assets/images/photo/DSC03495.jpg",
                    "assets/images/photo/DSC03519.jpg",
                    "assets/images/photo/DSC03531.jpg",
                    "assets/images/photo/DSC03562.jpg",
                    "assets/images/photo/DSC03563.jpg",
                    "assets/images/photo/DSC03615.jpg",
                    "assets/images/photo/DSC03644.jpg",
                    "assets/images/photo/DSC03645.jpg",
                    "assets/images/photo/DSC03669.jpg",
                    "assets/images/photo/pedro-romano.jpg",
                    "assets/images/photo/miyagi-ten.jpg",
                    "assets/images/photo/DSC03681.jpg",
                    "assets/images/photo/DSC03694.jpg"
                ]
            },
            {
                sectionTitle: 'vs FC町田ゼルビア',
                date: '2026.05.17',
                photos: [
                    "assets/images/photo/DSC01823.jpg",
                    "assets/images/photo/DSC01867.jpg",
                    "assets/images/photo/DSC01889.jpg",
                    "assets/images/photo/DSC01895.jpg",
                    "assets/images/photo/ito-tatsuya.jpg",
                    "assets/images/photo/DSC01910.jpg",
                    "assets/images/photo/DSC01913.jpg",
                    "assets/images/photo/DSC01925.jpg",
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
        sections: [
            {
                sectionTitle: '横浜F・マリノス vs FC町田ゼルビア',
                date: '2026.09.12',
                photos: [
                    "assets/images/photo/soma-yuki.jpg",
                    "assets/images/photo/DSC03958.jpg",
                    "assets/images/photo/DSC03962.jpg",
                    "assets/images/photo/DSC03975.jpg",
                    "assets/images/photo/DSC03978.jpg"
                ]
            },
            {
                sectionTitle: '横浜DeNAベイスターズ vs オリックス・バファローズ',
                date: '2026.05.28',
                photos: [                    
                    "assets/images/photo/azuma-katsuki.jpg",
                    "assets/images/photo/DSC02129.jpg",
                    "assets/images/photo/DSC02132.jpg",
                    "assets/images/photo/DSC02175.jpg",
                    "assets/images/photo/yoshida-kousei.jpg",
                    "assets/images/photo/yamasaki-yasuaki.jpg"
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
        sections: [
            {
                sectionTitle: '川崎フロンターレ始球式',
                date: '2026.08.15',
                photos: [                    
                    "assets/images/photo/DSC03572.jpg",
                    "assets/images/photo/DSC03579.jpg",
                    "assets/images/photo/DSC03580.jpg",
                    "assets/images/photo/DSC03581.jpg",
                    "assets/images/photo/tomita-suzuka.jpg",
                    "assets/images/photo/DSC03597.jpg"
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
                    "assets/images/photo/DSC02054.jpg",                                                            
                    "assets/images/photo/DSC02096.jpg",
                    "assets/images/photo/DSC02106.jpg",
                    "assets/images/photo/DSC02149.jpg",
                    "assets/images/photo/kosaka-nao.jpg",
                    "assets/images/photo/DSC02155.jpg",
                    "assets/images/photo/DSC02156.jpg",
                    "assets/images/photo/DSC02157.jpg",
                    "assets/images/photo/kamimura-hinano.jpg",
                    "assets/images/photo/DSC02168.jpg",
                    "assets/images/photo/DSC02177.jpg",
                    "assets/images/photo/DSC02201.jpg",
                    "assets/images/photo/DSC02219.jpg",
                    "assets/images/photo/DSC02228.jpg",
                    "assets/images/photo/DSC02361.jpg"
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
        sections: [
            {
                sectionTitle: '動物たち',
                date: '',
                photos: [
                    "assets/images/photo/kawauso.jpg",
                    "assets/images/photo/DSC00840.jpg",
                    "assets/images/photo/DSC00844.jpg",
                    "assets/images/photo/DSC00881.jpg",
                    "assets/images/photo/DSC01293.jpg"
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
        sections: [
            {
                sectionTitle: 'シハチ鮮魚店',
                date: '',
                photos: [
                    "assets/images/photo/shihachi-01.jpg",
                    "assets/images/photo/shihachi-02.jpg"
                ]
            },
            {
                sectionTitle: 'その他グルメ',
                date: '',
                photos: [
                    "assets/images/photo/DSC02459.jpg",
                    "assets/images/photo/DSC02462.jpg"
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
        sections: [
            {
                sectionTitle: 'ポケパークカントー',
                date: '',
                photos: [
                    "assets/images/photo/DSC00910.jpg",
                    "assets/images/photo/DSC00919.jpg",
                    "assets/images/photo/DSC00931.jpg",
                    "assets/images/photo/DSC00932.jpg",
                    "assets/images/photo/DSC00946.jpg",
                    "assets/images/photo/DSC00977.jpg"
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
                    "assets/images/photo/disneysea20260708-09.jpg",
                    "assets/images/photo/DSC02938.jpg",
                    "assets/images/photo/DSC02957.jpg",
                    "assets/images/photo/DSC02968.jpg"
                ]
            },
            {
                sectionTitle: '浅草',
                date: '',
                photos: [
                    "assets/images/photo/DSC01175.jpg",
                    "assets/images/photo/DSC01178.jpg",
                    "assets/images/photo/DSC01181.jpg"
                ]
            },
            {
                sectionTitle: '国立競技場(MUFGスタジアム)',
                date: '',
                photos: [
                    "assets/images/photo/DSC01969.jpg",
                    "assets/images/photo/DSC01970.jpg",
                    "assets/images/photo/DSC01988.jpg",
                    "assets/images/photo/DSC02013.jpg",
                    "assets/images/photo/DSC02019.jpg",
                    "assets/images/photo/sensoji.jpg"
                ]
            },
            {
                sectionTitle: 'HANA-BIYORI',
                date: '',
                photos: [
                    "assets/images/photo/DSC01206.jpg",
                    "assets/images/photo/DSC01232.jpg",
                    "assets/images/photo/DSC01240.jpg",
                    "assets/images/photo/DSC01263.jpg",
                    "assets/images/photo/hanabiyori-01.jpg",
                    "assets/images/photo/hanabiyori-02.jpg"
                ]
            },
            {
                sectionTitle: 'その他スポット',
                date: '',
                photos: [                    
                    "assets/images/photo/ginza-tokei.jpg",
                    "assets/images/photo/DSC00775.jpg",
                    "assets/images/photo/jingu-namiki.jpg",
                    "assets/images/photo/kadokawa-01.jpg",
                    "assets/images/photo/kadokawa-02.jpg",                                      
                    "assets/images/photo/DSC01132.jpg",                 
                    "assets/images/photo/DSC01276.jpg",
                    "assets/images/photo/DSC01280.jpg",
                    "assets/images/photo/DSC01282.jpg"
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
        sections: [
            {
                sectionTitle: '群馬旅行',
                date: '2026.09',
                photos: [
                    "assets/images/photo/yamba-01.jpg",
                    "assets/images/photo/yamba-02.jpg",
                    "assets/images/photo/kusatsu-01.jpg",
                    "assets/images/photo/kusatsu-02.jpg",
                    "assets/images/photo/kusatsu-03.jpg",
                    "assets/images/photo/DSC03911.jpg",
                    "assets/images/photo/DSC03916.jpg",
                    "assets/images/photo/DSC03917.jpg"
                ]
            },
            {
                sectionTitle: '香川旅行',
                date: '2026.08',
                photos: [
                    "assets/images/photo/DSC03721.jpg",
                    "assets/images/photo/DSC03730.jpg",
                    "assets/images/photo/DSC03733.jpg",
                    "assets/images/photo/DSC03743.jpg",
                    "assets/images/photo/takamatsu-syoudoshima.jpg",
                    "assets/images/photo/DSC03748.jpg",
                    "assets/images/photo/DSC03750.jpg",
                    "assets/images/photo/DSC03788.jpg",
                    "assets/images/photo/DSC03831.jpg",
                    "assets/images/photo/DSC03839.jpg"
                ]
            },
            {
                sectionTitle: '北海道旅行',
                date: '2026.08',
                photos: [
                    "assets/images/photo/sapporo-televitou.jpg",
                    "assets/images/photo/DSC03127.jpg",
                    "assets/images/photo/susukino-01.jpg",
                    "assets/images/photo/DSC03116.jpg",
                    "assets/images/photo/escon-01.jpg",
                    "assets/images/photo/DSC03208.jpg",
                    "assets/images/photo/escon-02.jpg",
                    "assets/images/photo/yuni-02.jpg",
                    "assets/images/photo/yuni-03.jpg",
                    "assets/images/photo/DSC03070.jpg",
                    "assets/images/photo/DSC03084.jpg",                                                           
                    "assets/images/photo/DSC03225-2.jpg"
                ]
            },
            {
                sectionTitle: '茨城・千葉旅行',
                date: '2026.06',
                photos: [
                    "assets/images/photo/DSC02418.jpg",
                    "assets/images/photo/DSC02420.jpg",
                    "assets/images/photo/DSC02422.jpg",
                    "assets/images/photo/DSC02423.jpg",
                    "assets/images/photo/DSC02434.jpg",
                    "assets/images/photo/DSC02435.jpg",
                    "assets/images/photo/DSC02440.jpg",
                    "assets/images/photo/DSC02450.jpg",
                    "assets/images/photo/DSC02452.jpg",
                    "assets/images/photo/DSC02453.jpg"
                ]
            },
            {
                sectionTitle: '軽井沢旅行',
                date: '2025.11',
                photos: [
                    "assets/images/photo/karuizawa.jpg"
                ]
            },
            {
                sectionTitle: '京都',
                date: '2025.10',
                photos: [
                    "assets/images/photo/toji-kyoto.jpg",
                    "assets/images/photo/DSC00718.jpg",
                    "assets/images/photo/DSC00725.jpg",
                    "assets/images/photo/DSC00727.jpg",
                    "assets/images/photo/DSC00731.jpg"
                ]
            },
            {
                sectionTitle: '大阪・関西万博',
                date: '2025.07',
                photos: [
                    "assets/images/photo/DSC00577.jpg",
                    "assets/images/photo/DSC00596.jpg",
                    "assets/images/photo/DSC00598.jpg",
                    "assets/images/photo/DSC00607.jpg",
                    "assets/images/photo/DSC00621.jpg",
                    "assets/images/photo/DSC00622.jpg"
                ]
            },
            {
                sectionTitle: '伊豆旅行',
                date: '2025.03',
                photos: [
                    "assets/images/photo/kawazu.jpg",
                    "assets/images/photo/DSC00553.jpg",
                    "assets/images/photo/DSC00562.jpg",
                    "assets/images/photo/DSC00567.jpg",
                    "assets/images/photo/DSC00575.jpg"
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
        sections: [
            {
                sectionTitle: 'びしょ濡れかけっこ',
                date: '2026.07.24',
                photos: [
                    "assets/images/photo/DSC_7385.jpg",
                    "assets/images/photo/DSC_7393.jpg",
                    "assets/images/photo/DSC_7453.jpg",
                    "assets/images/photo/DSC_7501.jpg",
                    "assets/images/photo/DSC_7541.jpg",
                    "assets/images/photo/DSC_7606.jpg",
                    "assets/images/photo/DSC_7694.jpg",
                    "assets/images/photo/DSC_7717.jpg",
                    "assets/images/photo/DSC_7747.jpg"  
                ]
            },
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
        date: '',
        categoryName: '写真（風景）',
        image: 'assets/images/photo/azisai-blue.jpg',
        sections: [
            {
                sectionTitle: '植物',
                date: '',
                photos: [
                    "assets/images/photo/yuni-01.jpg",
                    "assets/images/photo/yuni-04.jpg",
                    "assets/images/photo/yuni-05.jpg",
                    "assets/images/photo/DSC03164.jpg",
                    "assets/images/photo/DSC03165.jpg",
                    "assets/images/photo/DSC03168.jpg",
                    "assets/images/photo/DSC03170.jpg",
                    "assets/images/photo/DSC03173.jpg",
                    "assets/images/photo/DSC03181.jpg",
                    "assets/images/photo/disneysea20260708-02.jpg",
                    "assets/images/photo/disneysea20260708-03.jpg",
                    "assets/images/photo/disneysea20260708-04.jpg",
                    "assets/images/photo/disneysea20260708-05.jpg",
                    "assets/images/photo/azisai-blue.jpg",
                    "assets/images/photo/DSC02475.jpg",
                    "assets/images/photo/DSC02476.jpg",
                    "assets/images/photo/hanasyoubu.jpg",         
                    "assets/images/photo/DSC03188.jpg",
                    "assets/images/photo/DSC03228.jpg"
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
        sections: [
            {
                sectionTitle: '飛行機',
                date: '',
                photos: [
                    "assets/images/photo/haneda-anapokemon.jpg",
                    "assets/images/photo/haneda-solaseed.jpg",
                    "assets/images/photo/haneda-ana.jpg",
                    "assets/images/photo/haneda-airdorokon.jpg",
                    "assets/images/photo/haneda-delta.jpg",
                    "assets/images/photo/DSC01682.jpg"
                ]
            },
            {
                sectionTitle: 'その他',
                date: '',
                photos: [
                    "assets/images/photo/DSC02991-2.jpg"
                ]
            }
        ]
    }
];
