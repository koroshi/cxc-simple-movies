/**
 * Mocking client-server processing
 */
const _nowHot = [
  {
  	"id": "1578714", 
  	"rating": {
       "max": 10,
       "average": 8,
       "stars": "40",
       "min": 0
    },
    "title": "神奇女侠",
    "original_title": "Wonder Woman",
     "casts": [
       {
         "alt": "https://movie.douban.com/celebrity/1044996/",
         "avatars": {
           "small": "http://img7.doubanio.com/img/celebrity/small/8710.jpg",
           "large": "http://img7.doubanio.com/img/celebrity/large/8710.jpg",
           "medium": "http://img7.doubanio.com/img/celebrity/medium/8710.jpg"
         },
         "name": "盖尔·加朵",
         "id": "1044996"
       },
       {
         "alt": "https://movie.douban.com/celebrity/1053621/",
         "avatars": {
           "small": "http://img3.doubanio.com/img/celebrity/small/32637.jpg",
           "large": "http://img3.doubanio.com/img/celebrity/large/32637.jpg",
           "medium": "http://img3.doubanio.com/img/celebrity/medium/32637.jpg"
         },
         "name": "克里斯·派恩",
         "id": "1053621"
       },
       {
         "alt": "https://movie.douban.com/celebrity/1002676/",
         "avatars": {
           "small": "http://img3.doubanio.com/img/celebrity/small/51737.jpg",
           "large": "http://img3.doubanio.com/img/celebrity/large/51737.jpg",
           "medium": "http://img3.doubanio.com/img/celebrity/medium/51737.jpg"
         },
         "name": "罗宾·怀特",
         "id": "1002676"
       }
     ],
      "directors": [
	   {
	     "alt": "https://movie.douban.com/celebrity/1023041/",
	     "avatars": {
	       "small": "http://img3.doubanio.com/img/celebrity/small/55167.jpg",
	       "large": "http://img3.doubanio.com/img/celebrity/large/55167.jpg",
	       "medium": "http://img3.doubanio.com/img/celebrity/medium/55167.jpg"
	     },
	     "name": "派蒂·杰金斯",
	     "id": "1023041"
	   }
	 ],
	 "images": {
	   "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2460006593.webp",
	   // "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2460006593.webp",
	   "large": "http://img7.doubanio.com/img/celebrity/large/25843.jpg",

	   "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2460006593.webp"
	 }
  }
]

const  _moviesComing = [
	{
  	"rating": {
           "max": 10,
           "average": 0,
           "stars": "00",
           "min": 0
         },
         "genres": [
           "动作",
           "奇幻",
           "冒险"
         ],
         "title": "新木乃伊",
         "casts": [
           {
             "alt": "https://movie.douban.com/celebrity/1054435/",
             "avatars": {
               "small": "http://img3.doubanio.com/img/celebrity/small/567.jpg",
               "large": "http://img3.doubanio.com/img/celebrity/large/567.jpg",
               "medium": "http://img3.doubanio.com/img/celebrity/medium/567.jpg"
             },
             "name": "汤姆·克鲁斯",
             "id": "1054435"
           },
           {
             "alt": "https://movie.douban.com/celebrity/1199057/",
             "avatars": {
               "small": "http://img7.doubanio.com/img/celebrity/small/1400047780.22.jpg",
               "large": "http://img7.doubanio.com/img/celebrity/large/1400047780.22.jpg",
               "medium": "http://img7.doubanio.com/img/celebrity/medium/1400047780.22.jpg"
             },
             "name": "索菲亚·波多拉",
             "id": "1199057"
           },
           {
             "alt": "https://movie.douban.com/celebrity/1016674/",
             "avatars": {
               "small": "http://img7.doubanio.com/img/celebrity/small/17524.jpg",
               "large": "http://img7.doubanio.com/img/celebrity/large/17524.jpg",
               "medium": "http://img7.doubanio.com/img/celebrity/medium/17524.jpg"
             },
             "name": "罗素·克劳",
             "id": "1016674"
           }
         ],
         "collect_count": 59,
         "original_title": "The Mummy",
         "subtype": "movie",
         "directors": [
           {
             "alt": "https://movie.douban.com/celebrity/1049959/",
             "avatars": {
               "small": "http://img7.doubanio.com/img/celebrity/small/25843.jpg",
               "large": "http://img7.doubanio.com/img/celebrity/large/25843.jpg",
               "medium": "http://img7.doubanio.com/img/celebrity/medium/25843.jpg"
             },
             "name": "艾里克斯·库兹曼",
             "id": "1049959"
           }
         ],
         "year": "2017",
         "images": {
           "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2459198108.webp",
           "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2459198108.webp",
           "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2459198108.webp"
         },
         "alt": "https://movie.douban.com/subject/20451290/",
         "id": "20451290"
  }
]

export default {
  getCommingMovies (cb) {
    setTimeout(() => cb(_moviesComing), 100)
  },
  getNowHot (cb) {
  	setTimeout(() => cb(_nowHot), 100)
  }
}
