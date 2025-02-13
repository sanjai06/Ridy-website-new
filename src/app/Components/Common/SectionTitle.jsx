import parse from 'html-react-parser';
import Image from 'next/image';

const SectionTitle = ({Title,SubTitle,hidden}) => {
    return (
        <div>
          <div style={{display:`${hidden}`}} className="subtitle wow fadeInUp" data-wow-delay=".2s">
          {parse(SubTitle)} <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17}   />
          </div>
          <h1  className="title wow fadeInUp" data-wow-delay=".4s">{parse(Title)}</h1>
        </div>
    );
};

export default SectionTitle;