import HomeIcon from "$lib/assets/HomeIcon.png";
import ExploreIcon from "$lib/assets/ExploreIcon.png";
import LearnIcon from "$lib/assets/LearnIcon.png";
import ProfilePic from "$lib/assets/ProfilePic.png";
import Logo from "$lib/assets/LogoIcon.png";
import AppleCEO from "$lib/assets/AppleCEO.png";
import OpenAICEO from "$lib/assets/OpenAICEO.png";
import ArticlePost1Pic from "$lib/assets/ArticlePost1Pic.png";
import ArticlePost2Pic from "$lib/assets/ArticlePost2Pic.png";
import BetterUpLogo from "$lib/assets/BetterUpIcon.png";

export const menus = [
    {
        "name": "Home",
        "icon": {
            "src": HomeIcon,
            "alt": "Home Icon"
        }
    },
    {
        "name": "Explore",
        "icon": {
            "src": ExploreIcon,
            "alt": "Explore Icon"
        }
    },
    {
        "name": "Learn",
        "icon": {
            "src": LearnIcon,
            "alt": "Learn Icon"
        }
    }
]


export const profile = {
    "pic": {
        "src": ProfilePic,
        "alt": "Pic of the profile"
    },
    "name": {
        "firstName": "Krishna",
        "lastName": "Kiran",
    },
    "description": "Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.",
    "followStatus": "Follow",
    "company": {
        "logo": {
            "src": Logo,
            "alt": "Logo of the organisation",
        },
        "name": "Duggup",
        "designation": "Co-Founder and CEO",

    },
    "webLink": "https://my-portfolio-amitav.vercel.app/",
    "info": [
        {
            "articles": {
                "date": "Dec 2023",
                "posts": [
                    {
                        "pic": {
                            "src": AppleCEO,
                            "alt": "Pic of the apple CEO"
                        },

                        "content": "No amount of technology can convert a bad story into a good story.",
                    },

                    {
                        "pic": {
                            "src": OpenAICEO,
                            "alt": "Pic of the OpenAI CEO"
                        },
                        "content": "Your biggest regrets at 80 will be acts of omission.",
                    }

                ]
            },

            "designationInfo": {
                "description": {
                    "logo":{
                        "src" :  Logo,
                        "alt" : "Logo of Duggup"
                    },
                    "organisatioName": "Duggup",
                    "location": "San Francisco Bay Area",
                    "joinedDate": "Nov 2023"
                },
                "designation": {
                    "title": "Co-Founder and CEO",
                    "mode": "Full-time · Remote"
                }
            }

        },


        {
            "articles": {
                "date": "Dec 2023",
                "posts": [
                    {
                        "pic" : {
                            "src" : ArticlePost1Pic,
                            "alt" : "Pic of the first Article"
                        },
                        "content": "Startup Lesson I am reflecting. Don't build for the average person.",
                    },

                    {
                        "pic" : {
                            "src" : ArticlePost2Pic,
                            "alt" : "Pic of the second Article"
                        },
                        "content": "Your biggest regrets at 80 will be acts of omission.",
                    }

                ]
            },

            "designationInfo": {
                "description": {
                    "logo":{
                        "src" :  BetterUpLogo,
                        "alt" : "Logo of BetterUp"
                    },
                    "organisatioName": "BetterUp",
                    "location": "San Francisco Bay Area",
                    "joinedDate": "Sep 2022"
                },
                "designation": {
                    "title": "VP Engineering",
                    "mode": "Full-time"
                    
                }
            }

        }


    ]


}
