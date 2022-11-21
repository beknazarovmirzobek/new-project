import athlete from './img/athlete-small.png';
import therecer from './img/theracer-small.png';
import goodtimes from './img/goodtimes-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg';

export const movieState = () => {
    return [
        {
            title: "The Athlete",
            mainImg: athlete,
            secondaryImg: athlete2,
            url: "/work/the-athlete",
            awards: [
                {
                    title: "Truly A masterpiece.",
                    description: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero placeat dolorem officia corporis quas eligendi praesentium quod consequuntur eaque!"',
                },
                {
                    title: "Fresh look on a brutal sport.",
                    description: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero placeat dolorem officia corporis quas eligendi praesentium quod consequuntur eaque!"',
                },
                {
                    title: "It's okey lmao.",
                    description: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero placeat dolorem officia corporis quas eligendi praesentium quod consequuntur eaque!"',
                }
            ]
        },
        {
            title: "Good Times",
            mainImg: goodtimes,
            secondaryImg: goodtimes2,
            url: "/work/good-times",
            awards: [
                {
                    title: "Truly A masterpiece.",
                    description: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero placeat dolorem officia corporis quas eligendi praesentium quod consequuntur eaque!"',
                },
                {
                    title: "Fresh look on a brutal sport.",
                    description: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero placeat dolorem officia corporis quas eligendi praesentium quod consequuntur eaque!"',
                },
                {
                    title: "It's okey lmao.",
                    description: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero placeat dolorem officia corporis quas eligendi praesentium quod consequuntur eaque!"',
                }
            ]
        },
        {
            title: "The Racer",
            mainImg: therecer,
            secondaryImg: theracer2,
            url: "/work/the-racer",
            awards: [
                {
                    title: "Truly A masterpiece.",
                    description: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero placeat dolorem officia corporis quas eligendi praesentium quod consequuntur eaque!"',
                },
                {
                    title: "Fresh look on a brutal sport.",
                    description: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero placeat dolorem officia corporis quas eligendi praesentium quod consequuntur eaque!"',
                },
                {
                    title: "It's okey lmao.",
                    description: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero placeat dolorem officia corporis quas eligendi praesentium quod consequuntur eaque!"',
                }
            ]
        }
    ]
}