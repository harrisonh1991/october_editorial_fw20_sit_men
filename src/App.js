import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";
import Hero from './components/Hero/Hero.jsx';
import ScrollMagicDiv from './components/ScrollMagic/ScrollMagicDiv.jsx';
import ProductShow from "./components/productShow/productShow.jsx";
import Image from './components/Image/image.jsx';
import RedirectBannerCta from './components/Redirect/redirectBannerCta.jsx';
import {ShopAll} from './components/shopAll/shopAll.jsx';

import './App.scss';

const App = () => (
    <article className="App">
        <Hero 
            banner={<Image image={{ mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031893246238549.jpg", desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/1603189323669754.jpg'}}/>}
            title={<div>灵感集结<br/>解锁 2020 秋冬潮流趋势</div>}
            content="在经历了漫长的沉寂与等待后，潮流灵感在秋冬季节被唤醒。复古、脑洞、理性、文艺，一系列关键词引发幻想，新的惊喜与生活之美等待被发现，快跟上 ITeSHOP 的脚步，做好准备，为你的衣橱提前布局！"
        />
        <main className="main">
            <ProductShow 
                title="机能主义大行其道" 
                content="功能元素在本季男装造型中依旧“挑大梁”，各大品牌对于搭配场景与穿着体验投入了更多关注。尺寸各异的多口袋设计方便实用，结合利落剪裁更丰富了整体视觉效果，达到时髦与实用的双赢，呈现多面绅士风格。"
                scrollMagicItems={[{
                    triggerElement: 'sm1_1',
                    children:(<Image image={{mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543354896207.jpg', desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543337675609.jpg'}}/>),
                    from: {rotation:3},
                    to: {rotation:0},
                    duration: '300'
                },
                {
                    triggerElement: 'sm1_2',
                    children:(<Image image={{mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543343879889.jpg', desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543335755485.jpg'}}/>),
                    from: {rotation:10},
                    to: {rotation:0},
                    duration: '300'
                }]}
                photosTags={['STONE ISLAND']}
                triggerHook="onLeave"
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'JUUOC839P61MFSVX',
                            name: '饰口袋连帽风衣',
                            brand: 'JUUN.J',
                        },
                        {
                            sku: 'JUUJK939PD6MFGYL',
                            name: '多口袋连帽夹克',
                            brand: 'JUUN.J',
                        },
                        {
                            sku: 'OFWJKPAJK10MCBKX',
                            name: 'Logo 缝饰配口袋夹克',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        },
                        {
                            sku: 'OFWSTOG2715NFGRX',
                            name: '饰口袋 logo 印花衬衫',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        }
                    ]
                }}
            />
            <ProductShow 
                title="跨季开衫魅力持续" 
                content="持久耐穿的跨季单品越来越受到理性消费者的欢迎，而针织开衫凭借其百搭属性及叠穿魅力，一路从春夏挺进秋冬。传统技艺及简约色系的运用平衡了怀旧感与摩登气质，令整体设计透露着慵懒儒雅的味道。"
                scrollMagicItems={[{
                    triggerElement: 'sm2_1',
                    children:(<Image image={{ desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543328404636.jpg', mobile:'//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543354319192.jpg'}}/>),
                    from: {rotation:3},
                    to: {rotation:0},
                    duration: 300,
                },
                {
                    triggerElement: 'sm2_2',
                    children:(<Image image={{ desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543331884414.jpg', mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543357636988.jpg'}}/>),
                    from: {rotation:-10},
                    to: {rotation:0},
                    duration: 300,
                }]}
                photosTags={['toga archives', 'Comme des Garçons HOMME PLUS']}
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'OFWCDSR0816MFBGX',
                            name: '饰飘带针织开衫',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        },
                        {
                            sku: 'CPXCDAZN058X7GYX',
                            name: '爱心缝饰开衫',
                            brand: 'Play Comme des Garçons',
                        },
                        {
                            sku: 'ANXCD0092KAMEORX',
                            name: '系扣针织开衫',
                            brand: 'Acne Studios',
                        },
                        {
                            sku: 'JLXCD752005MFGYX',
                            name: '落肩设计针织开衫',
                            brand: 'JIL SANDER',
                        }
                    ]
                }}
            />
            <ProductShow 
                title="复古格纹大势回潮" 
                content="纵观几大时装周，格纹元素是本季无法忽视的重头戏。从外套到运动裤，从帽子到衬衣，传统格纹面料以拼接、撞色等现代方式诠释变奏，利落剪裁更着重突出了男士的潇洒干练，演绎复古又新潮的秋冬风尚。"

                scrollMagicItems={[{
                    triggerElement: 'sm3_1',
                    children:(<Image hideMobile={1} image={{ src: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543340367316.jpg'}}/>),
                    from: {rotation:10},
                    to: {rotation:0},
                    duration: 300
                },
                {
                    triggerElement: 'sm3_2',
                    children:(<Image image={{ desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543334481960.jpg', mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543346842474.jpg'}}/>),
                    from: {rotation:20},
                    to: {rotation:0},
                    duration: 300
                },
                {
                    triggerElement: 'sm3_3',
                    children:(<Image image={{ desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543331156081.jpg', mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543358006484.jpg'}}/>),
                    from: {rotation:-20},
                    to: {rotation:0},
                    duration: 300
                }]}
                photosTags={['A.P.C']}
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'OFWSNAR7712MFRDX',
                            name: '箭头装饰拼色运动鞋',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        },
                        {
                            sku: '0ZXPTM152010ERDX',
                            name: '老虎边饰休闲裤',
                            brand: 'A BATHING APE®',
                        },
                        {
                            sku: 'OFWSWDE2512MFRDX',
                            name: '斜纹边饰卫衣',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        },
                        {
                            sku: 'PMACPCR0603MFRDX',
                            name: 'Logo 刺绣棒球帽',
                            brand: 'Palm Angels',
                        }
                    ]
                }}
            />
            <ProductShow 
                title="红色派对耀目开启" 
                content="红色象征着自我、活力与热情，尤其在今年疫情的影响下，急需一抹明媚来照亮生活之美。本季男装设计中红色单品以更挺括的现代感外观和运动风格来呈现，混搭简约中性色一起穿着既可以平衡这份浓烈，又轻松聚焦造型亮点。"
                
                scrollMagicItems={[{
                    triggerElement: 'sm4_1',
                    children:(<Image hideMobile={1} image={{ desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543332302262.jpg', mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543350479570.jpg'}}/>),
                    from: {rotation:10},
                    to: {rotation:0},
                    duration: 300
                },
                {
                    triggerElement: 'sm4_2',
                    children:(<Image image={{ src: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543341456173.jpg'}}/>),
                    from: {rotation:-10},
                    to: {rotation:0},
                    duration: 300
                }]}
                photosTags={['AMI', 'A.P.C', 'N.HOLLYWOOD']}
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'PMAPTBB0623MFBLZ',
                            name: '条纹边饰格纹休闲裤',
                            brand: 'Palm Angels',
                        },
                        {
                            sku: 'OFWJKPB3611MFBKX',
                            name: '箭头缝饰格纹连帽夹克',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        },
                        {
                            sku: 'JZXSTB00805MFBLX',
                            name: '格纹拼接衬衫',
                            brand: 'JUNYA WATANABE',
                        },
                        {
                            sku: 'SUSHT332102XERDX',
                            name: '饰标签格纹渔夫帽',
                            brand: 'STUSSY',
                        }
                    ]
                }}
            />
            <ProductShow 
                title="多变牛仔重塑风格" 
                content="牛仔热潮一路从春夏延续到秋冬。除了水洗和褪色风格的单品外，玩味的解构设计势头强劲，原始状态下的简约丹宁也重磅回归，不同手法演绎多变风格，充分展现这一常青元素的独特魅力。
                10:16
                "
                scrollMagicItems={[{
                    triggerElement: 'sm5_1',
                    children:(<Image image={{ desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543335294199.jpg', mobile:'//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543344447054.jpg'}}/>),
                    from: {rotation: -20},
                    to: {rotation:0},
                    duration: 300
                },
                {
                    triggerElement: 'sm5_2',
                    children:(<Image image={{ desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543328704059.jpg', mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543351224154.jpg'}}/>),
                    from: {rotation: 10},
                    to: {rotation:0},
                    duration: 300
                }]}
                photosTags={['MAISON MARGIELA', 'Comme des Garçons HOMME PLUS', 'MIHARA YASUHIRO']}
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'ANXJKB90452MFBLX',
                            name: '饰口袋直排扣牛仔夹克',
                            brand: 'Acne Studios',
                        },
                        {
                            sku: '0ZXJKM10004XENYX',
                            name: '挖剪细节直排扣外套',
                            brand: 'A BATHING APE®',
                        },
                        {
                            sku: 'ZVXJNCA3001HFBLX',
                            name: 'David 饰标语牛仔裤',
                            brand: 'Zadig & Voltaire',
                        },
                        {
                            sku: 'OFWJNSB0514MFBKX',
                            name: '饰“BELT”印花腰带牛仔裤',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        }
                    ]
                }}
            />
            <ShopAll 
                cta={{
                    link: "https://cn.iteshop.com/b_it/men/new-arrivals",
                    content: '选购全部'
                }}
            />  
            <RedirectBannerCta media={(
            <Image image={{mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/20/16031858095676233.jpg', desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543327949683.jpg'}}/> 
            )} 
            desc={{
                titles: ['风格盛宴', '直击 2020 秋冬潮流趋势'],
                content: '探寻潮流与生活的更多可能。'
            }}
            cta={{
                link: 'https://cn.iteshop.com/b_it/landingPage/october-fw20-w',
                content: '探索女士'
            }}
            />
        </main>
    </article>
);

export default App;
