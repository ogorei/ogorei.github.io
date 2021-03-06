import React from 'react';
import Carousel from '../components/Carousel';
import presentation from '../assests/presentation.png';
import colorpicker from '../assests/colorpicker.png';
import zoological from '../assests/zoological.png';
import quoteApi from '../assests/quote.png';
import track from '../assests/track.png';
import cute from '../assests/cute.jpeg';


const SmallProject=()=>{

    const cardContent=[
        {id: 1, image:track, title: "COVID-TRACK", description:"新型コロナウイルスの状況", tools:"VUEJS", link:"https://c-track.netlify.app"},
        {id: 2, image:cute, title: "Play World", description:"保育園むけのLP", tools:"IONIC REACT", link:"https://playworld.netlify.app"},
        {id: 3, image:quoteApi, title: "QuoteAPI", description:"名言で毎日３秒の英単語練習！", tools:"HTML5, CSS3, JS", link: "https://yourdailyquote.netlify.app"},
        {id: 4, image:zoological, title:"Zoological LP", description: "家族向けのLPなので、楽しい気分になるパステルカラーを使用し、文字の大きさを調整しながら親安さを出しました。", tools:"HTML5, CSS3, JQuery", link: "https://zoological.netlify.app"},
        {id: 5, image:colorpicker, title:"Color Picker", description: "コピーペーストで簡単にCSSグラデーション作れます",tools:"HTML5, CSS3, JS",  link:"https://pick-your-color.netlify.app"},
        {id: 6, image:presentation, title: "UI Design", description:"スマートフォンで操作する前提で大きめの写真や少なめの情報を意識しました。", tools:"Abobe AI,XD", link:"https://www.behance.net/reinaogo1"},
    ]
    const projectList = cardContent.map(data =>
       <Carousel key={data.id} data={data}/>)

    return(
        <div>
            {projectList}
     </div>
     )
}

export default SmallProject;