import Image from "next/image";

const FeatureCard = ({img,title,animation,content}) => {
    return (
        <div className={` fancy-box style2 ${animation} `} >
            
        <div className="icon"><Image src={img} alt="img" width={50} height={50}   /></div>
        <div className="content wow fadeInUp" data-wow-delay=".2s">
            <h5>{title}</h5>
            <p className="text">{content}</p>
        </div>
    </div>
    );
};

export default FeatureCard;