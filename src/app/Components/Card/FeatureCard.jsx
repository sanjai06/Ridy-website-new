import Image from "next/image";

const FeatureCard = ({img,title,animation,fancycard,content}) => {
    return (
        <div className={` fancy-box  ${fancycard} style2 ${animation} `} >
            
        <div className="icon"><Image src={img} alt="img" width={70} height={70}   /></div>
        <div className="content wow fadeInUp" data-wow-delay=".2s">
            <h3 style={{fontSize:"20px"}}>{title}</h3>
            <p className="text">{content}</p>
        </div>
    </div>
    );
};

export default FeatureCard;

