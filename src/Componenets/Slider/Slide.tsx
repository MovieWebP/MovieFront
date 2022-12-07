import { IMovie } from "../../Api/api";
import * as S from "./SlideStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import SlickSider from "./Slick/SlickSider";

interface IProps {
    id: string;
    part: string;
    title: string;
    query: string;
    movies: IMovie[];
}


function Slide({ id, part, title, movies }: IProps) {

    const NextArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronRight} size="3x" className="slick-arrow-icon-right" />
            </div>
        );
    }

    const PrevArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronLeft} size="3x" className="slick-arrow-icon-left" />
            </div>
        );
    }

    const settings = {
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        speed: 1000,
        pauseOnHover: true,
        draggable: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px일 때
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 700, //화면 사이즈 960px일 때
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 500, //화면 사이즈 960px일 때
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
        ]
    };
    return (
        <S.SliderWrap>
            <S.TitleWrap>
                <S.Title>{title}</S.Title>
            </S.TitleWrap>
            <S.Wrap>
                <S.Slider
                >
                    <SlickSider
                        settings={{ ...settings }}
                        id={id}
                        part={part}
                        movies={movies}
                    />
                </S.Slider>
            </S.Wrap>
        </S.SliderWrap >
    );
}

export default Slide;