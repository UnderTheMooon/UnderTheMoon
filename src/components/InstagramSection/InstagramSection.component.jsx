import galleryImgOne from '../../assets/gallery1.jpg';
import galleryImgTwo from '../../assets/gallery2.jpg';
import galleryImgThree from '../../assets/gallery3.jpg';
import galleryImgFour from '../../assets/gallery4.jpg';
import galleryImgFive from '../../assets/gallery5.jpg';
import galleryImgSix from '../../assets/gallery6.jpg';
import galleryImgSeven from '../../assets/gallery7.jpg';
import galleryImgEight from '../../assets/gallery8.jpg';
import galleryImgNine from '../../assets/gallery9.jpg';
import galleryImgTen from '../../assets/gallery10.jpg';
import galleryImgEleven from '../../assets/gallery11.jpg';
import galleryImgTwelve from '../../assets/gallery12.jpg';
import { InstagramSectionStyled } from './InstagramSection.styled';

const galleryImages = [
    galleryImgOne,
    galleryImgTwo,
    galleryImgThree,
    galleryImgFour,
    galleryImgFive,
    galleryImgSix,
    galleryImgSeven,
    galleryImgEight,
    galleryImgNine,
    galleryImgTen,
    galleryImgEleven,
    galleryImgTwelve,
]

export const InstagramSection = () => {
    return (
        <InstagramSectionStyled>
            <h2>Follow os on Instagram</h2>
            <div>
                {galleryImages.map((img, index) => (
                    <img src={img} alt={`Gallery Image ${index + 1}`} />
                ))}
            </div>
        </InstagramSectionStyled>
    )
}
