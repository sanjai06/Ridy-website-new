import Image from "next/image";

const FeatureCard = ({img,title,animation,fontSize,fancycard,content}) => {
    return (
        <div className={`  fancy-box     ${fancycard} style2 ${animation} `} >
            
        <div  className="icon iconbg2"><Image src={img} alt="img" width={40} height={40}   /></div>
        <div className="content wow fadeInUp" data-wow-delay=".2s">
            <h3 style={{fontSize:`${fontSize}`,fontWeight:"800"}}>{title}</h3>
            <p className="text">{content}</p>
        </div>
    </div>
    );
};

export default FeatureCard;

