import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";
import styles from "./App.module.scss";
import Hero from './components/Hero/Hero.jsx';
import ProductShow from "./components/productShow/productShow.jsx";
import Image from './components/Image/image.jsx';
import RedirectBannerCta from './components/Redirect/redirectBannerCta.jsx';
import {ShopAll} from './components/shopAll/shopAll.jsx';

import './App.scss';

const App = () => (
    <article className="App">
        <header>
            <Hero 
                banner={<Image image={{ mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893246238549.jpg", desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/1603189323669754.jpg'}}/>}
                title={<div>灵感集结<br/>解锁 2020 秋冬潮流趋势</div>}
                content="在经历了漫长的沉寂与等待后，潮流灵感在秋冬季节被唤醒。复古、脑洞、理性、文艺，一系列关键词引发幻想，新的惊喜与生活之美等待被发现，快跟上 ITeSHOP 的脚步，做好准备，为你的衣橱提前布局！"
            />
        </header>
        <main className={['"landPg"', styles.container].join(' ')}>
            <ProductShow 
                banner1={(<Image image={{mobile: "https://itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/1603189324151725.jpg", desktop: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893229049186.jpg"}}/>)}
                title="机能主义大行其道" 
                content="这一季依然能嗅到“机能风”的热潮，功能强大且用途广泛的单品引爆需求。无论是尺寸各异的口袋设计，抑或帅酷不羁的工装服，设计师们在发挥创意的同时，也对搭配场景和穿着体验投入了更多关注，达到时髦与实用的双赢。"
                banner2={(<Image image={{mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893246282255.jpg", desktop: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893235724017.jpg"}} />)}
                products={{
                    shopUrl: "https://cn.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'IZXLJR7112F0FKHX',
                            name: 'ARMY 系列 多口袋连帽夹克',
                            brand: 'izzue',
                        },
                        {
                            sku: 'AFMSTM00044XFWHX',
                            name: '饰口袋直排衬衫',
                            brand: 'AFTERMATHS',
                        },
                        {
                            sku: 'CHXJKI028380FGRD',
                            name: '多口袋拉链夹克',
                            brand: 'Carhartt WIP',
                        },
                        {
                            sku: '5CXPTV6702F0FBKX',
                            name: '饰口袋束脚休闲裤',
                            brand: 'FIVE CM',
                        }
                    ]
                }}
            />
            <ProductShow 
                banner1={(<Image image={{mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893241915264.jpg", desktop: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893230741429.jpg"}}/>)}
                title="温暖毛绒风潮盛行" 
                content="复古风的驱使下，怀旧的毛绒及灯芯绒元素得以“重见光明”，拼接、撞色、立体剪裁等手法弱化了材质本身的年代感，着重突出机能性与街头氛围，确保温暖的同时更张扬时髦态度。"
                banner2={(<Image image={{mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893247062834.jpg", desktop: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893239527147.jpg"}} />)}
                products={{
                    shopUrl: "https://cn.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'FFXJKM70301XFIVX',
                            name: '饰口袋绒面夹克',
                            brand: 'FINGERCROXX',
                        },
                        {
                            sku: 'CHXCPA202039FBWX',
                            name: 'Logo 刺绣绒面棒球帽',
                            brand: 'Carhartt WIP',
                        },
                        {
                            sku: 'RRGVCM00117XFBKX',
                            name: '两面穿饰多口袋马甲',
                            brand: 'R.R.G.S',
                        },
                        {
                            sku: 'TNTJK0FOW006FMLX',
                            name: '饰 logo 豹纹绒面夹克',
                            brand: 'THISISNEVERTHAT',
                        }
                    ]
                }}
            />
            <ProductShow 
                banner1={(<Image image={{mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893242787000.jpg", desktop: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893231106615.jpg"}}/>)}
                title="红色派对耀目开启" 
                content="红色象征着自我、活力与热情，尤其在今年疫情的影响下，急需一抹明媚来照亮生活之美。运动风格的卫衣、机能感十足的外套、休闲潮范的卫裤等都是热门单品，搭配低调中性色一起穿着就能轻松聚焦造型亮点。"
                banner2={(<Image image={{mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893249295556.jpg", desktop: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893239654941.jpg"}} />)}
                products={{
                    shopUrl: "https://cn.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'UGNPTC5021MAFBDX',
                            name: 'Logo 印花束脚卫裤',
                            brand: 'UNDER GARDEN',
                        },
                        {
                            sku: 'CUMLJ213T005ERDX',
                            name: 'Logo 缝饰连帽夹克',
                            brand: 'CHUMS',
                        },
                        {
                            sku: 'IZXHTH0400F8BRDX',
                            name: 'NHIZ 系列 标签缝饰套头帽',
                            brand: 'izzue',
                        },
                        {
                            sku: 'CUMSW257K001ERDX',
                            name: '图案印花连帽卫衣',
                            brand: 'CHUMS',
                        }
                    ]
                }}
            />
            <ProductShow 
                banner1={(<Image image={{mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893243755817.jpg", desktop: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893231817931.jpg"}}/>)}
                title="复古格纹大势回潮" 
                content="格纹元素是秋冬季节无法忽视的重头戏，从外套到运动裤，从帽子到衬衣，传统格纹面料以拼接、撞色等现代方式诠释变奏，利落剪裁和廓形设计更渲染了街头感，演绎复古又新潮的型男风尚。"
                banner2={(<Image image={{mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893249107115.jpg", desktop: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893229013862.jpg"}} />)}
                products={{
                    shopUrl: "https://cn.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: '5CXHTC0401F0FNYX',
                            name: '文字刺绣格纹拼接渔夫帽',
                            brand: 'FIVE CM',
                        },
                        {
                            sku: 'MMUSTM80158XFRDX',
                            name: '照片缝饰格纹衬衫',
                            brand: 'MUSIUM DIV.',
                        },
                        {
                            sku: 'IZXSTH8132F9DRDX',
                            name: 'NHIZ 系列 双口袋格纹衬衫',
                            brand: 'izzue',
                        },
                        {
                            sku: '5CXLJR7127F0FBLX',
                            name: '饰口袋格纹拼接夹克',
                            brand: 'FIVE CM',
                        }
                    ]
                }}
            />
            <ProductShow 
                banner1={(<Image image={{mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893243928928.jpg", desktop: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893232596545.jpg"}}/>)}
                title="多变牛仔重塑风格" 
                content="牛仔热潮一路从春夏延续到秋冬。除了水洗和褪色风格的单品外，玩味的解构设计势头强劲，原始状态下的简约丹宁也重磅回归，不同手法演绎多变风格，充分展现这一常青元素的独特魅力。"
                banner2={(<Image image={{mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/1603189324045428.jpg", desktop: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893229795532.jpg"}} />)}
                products={{
                    shopUrl: "https://cn.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: '5CXLJJ7500F0FBLX',
                            name: '饰口袋牛仔夹克',
                            brand: 'FIVE CM',
                        },
                        {
                            sku: '5CXJNJ6508F0FBLX',
                            name: '磨损细节牛仔裤',
                            brand: 'FIVE CM',
                        },
                        {
                            sku: 'UGNLJC7213MAFBLD',
                            name: 'Logo 刺绣饰口袋牛仔夹克',
                            brand: 'UNDER GARDEN',
                        },
                        {
                            sku: 'UGNJNC6071MAEBLL',
                            name: '口袋缝饰牛仔长裤',
                            brand: 'UNDER GARDEN',
                        }
                    ]
                }}
            />
            
            <ShopAll 
                cta={{
                    link: "https://cn.iteshop.com/s_it/men/new-arrivals",
                    content: '选购全部'
                }}
            />  
        </main>
        <footer className={['"landPg"', styles.container].join(' ')}>
            <RedirectBannerCta 
                media={(<Image image={{mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/21/16032647826866763.jpg', desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893235059409.jpg'}}/> )} 
                cta={{
                    link: 'https://cn.iteshop.com/s_it/landingPage/october-fw20-w',
                    content: '探索女装潮流趋势'
                }}
                />
        </footer>
    </article>
);

export default App;
