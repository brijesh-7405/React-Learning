import React, { Component } from 'react'
import Loader from './Loader';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Argentina inflation soars past 100% mark",
            "description": "Inflation hits triple digits for the first time since the period of hyperinflation in the early 1990s.",
            "url": "http://www.bbc.co.uk/news/world-latin-america-64960385",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/60D4/production/_128988742_gettyimages-1247118853.jpg",
            "publishedAt": "2023-03-15T09:07:16.8457939Z",
            "content": "Argentina's inflation rate has soared past 100% for the first time since the end of hyperinflation in the early 90s.\r\nInflation hit 102.5% in February, the country's statistics agency said, meaning t… [+1705 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Wild horses found shot dead, Canadian police say",
            "description": "The Royal Canadian Mounted Police said the horses are of significance to a local indigenous band.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-64947618",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/EA36/production/_128985995_gettyimages-1237324023.jpg",
            "publishedAt": "2023-03-15T08:37:16.8300175Z",
            "content": "Canadian police said they are investigating the suspicious death of 17 wild horses in British Columbia. \r\nThe horses appear to have been shot and killed near the Kamloops area, the Royal Canadian Mou… [+1300 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Extreme travel: It just got harder to see every place in the world",
            "description": "Extreme travellers want to go everywhere - but one group just moved the goalposts...",
            "url": "http://www.bbc.co.uk/news/world-64730548",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8118/production/_128984033_kari-matti.jpg",
            "publishedAt": "2023-03-15T08:07:15.8453903Z",
            "content": "Extreme travel isn't for the feint-hearted. Kari-Matti Valtari would know. \r\nHe has been arrested multiple times and held in detention in war-torn nations, but has seen everywhere from St Eustatius t… [+3546 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Bob Junior: Lion who was 'king' of the Serengeti killed by rivals",
            "description": "Three younger lions killed Bob Junior in a battle for dominance, wildlife officials say.",
            "url": "http://www.bbc.co.uk/news/world-africa-64938816",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/62AA/production/_128985252_e31a7171-28ae-456b-b55b-52709e84e4e1.jpg",
            "publishedAt": "2023-03-15T07:52:19.0017727Z",
            "content": "A lion known as the king of the Serengeti has been killed by rivals.\r\nTour operators and visitors to the national park have paid tribute to the \"legendary\" Bob Junior - also known as Snyggve - online… [+1747 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Taiwan ally Honduras seeks diplomatic switch to China",
            "description": "The island will have formal diplomatic ties with only 13 countries if Honduras makes the switch.",
            "url": "http://www.bbc.co.uk/news/world-asia-china-64960744",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B7F0/production/_128988074_gettyimages-1236879808.jpg",
            "publishedAt": "2023-03-15T07:22:15.298358Z",
            "content": "Taiwan is in danger of losing one of its few formal allies, Honduras, as the Central American nation seeks official relations with China.\r\nHonduran President Xiomara Castro said the pivot aims to exp… [+2196 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "RAF and German jets intercept Russian aircraft near Estonian airspace",
            "description": "Two Typhoon jets are scrambled to intercept a plane flying between St Petersburg and Kaliningrad.",
            "url": "http://www.bbc.co.uk/news/world-europe-64960706",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/F79C/production/_128988336_jets.png",
            "publishedAt": "2023-03-15T06:07:29.0959511Z",
            "content": "RAF and German fighter jets have intercepted a Russian aircraft near Estonian airspace in the first joint operation of its kind.\r\nThe two Typhoons were scrambled on Tuesday to intercept an Il-78 Mida… [+1686 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Jiang Yanyong: Whistleblower doctor who exposed China's Sars cover-up dies",
            "description": "Jiang Yanyong became a national hero after revealing Beijing was covering up the scale of the virus.",
            "url": "http://www.bbc.co.uk/news/world-asia-china-64960693",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/23E4/production/_128988190_gettyimages-1125732083.jpg",
            "publishedAt": "2023-03-15T06:07:27.9556097Z",
            "content": "Jiang Yanyong, a former military surgeon who blew the whistle on the Chinese authorities' cover-up of the 2003 Sars epidemic has died aged 91.\r\nHe died of pneumonia on Saturday in Beijing, family fri… [+2566 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Imran Khan decries arrest attempt amid violence in Pakistan",
            "description": "The ex-PM says he was \"mentally prepared\" for sleeping in a cell, as police did battle with his supporters.",
            "url": "http://www.bbc.co.uk/news/world-asia-64957293",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/144D6/production/_128985138_mediaitem128985137.jpg",
            "publishedAt": "2023-03-15T06:07:26.3140381Z",
            "content": "Media caption, Watch: Imran Khan's Lahore house hit with tear gas\r\nPakistan's main opposition leader Imran Khan says the authorities are acting outside the law in their attempt to arrest him.\r\n\"They … [+1915 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Russia pilots 'reckless' in drone collision - US",
            "description": "A US surveillance drone plunged into the Black Sea following an encounter with Russian fighter jets.",
            "url": "http://www.bbc.co.uk/news/world-europe-64960384",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/141AC/production/_128984328_mediaitem128984327.jpg",
            "publishedAt": "2023-03-15T05:22:17.5948833Z",
            "content": "The US has accused Russia of reckless behaviour after an American surveillance drone crashed into the Black Sea following an encounter with Russian fighter jets.\r\nThe US says the drone was on a routi… [+2870 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "US drone crash: A moment fraught with danger",
            "description": "The encounter between a Russian jet and a US drone raises some difficult questions for President Biden.",
            "url": "http://www.bbc.co.uk/news/world-europe-64959498",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7CE0/production/_128986913_gettyimages-497592586.jpg",
            "publishedAt": "2023-03-14T21:07:17.4913636Z",
            "content": "The encounter between Russian jets and a US drone, which resulted in the drone crashing into the Black Sea, appears to be the most significant publicly acknowledged US-Russia confrontation since Russ… [+3114 chars]"
        }
    ]

    static defautProps  = {
        country : "in",
        pageSize : 6,
        category : "general"
    }
    static propTypes  = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
    }

    constructor(){
        super();
        this.state= {
        articles : [],
        loading : false,
        page: 1,
        }
    }
    async componentDidMount(){
       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7d09c0aa5d354d6ebe64db1182b4a201&page=${this.state.page}&pageSize=${this.props.pageSize}`;
       this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
        console.log(url)
        this.setState({loading : false})


    }

    handlePreviousClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7d09c0aa5d354d6ebe64db1182b4a201&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles})
     this.setState({
        page: this.state.page - 1,
     })
     console.log(url)
     this.setState({loading : false})

    }
    handleNextClick = async ()=>{
        console.log(this.state.totalResults)
        // if(this.state.page +1 > Math.ceil(this.state.totalResults/18)){}
        if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)){}
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7d09c0aa5d354d6ebe64db1182b4a201&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json();
        // this.setState({articles:parsedData.articles})
        this.setState({
            page: this.state.page +1,
            articles:parsedData.articles,
            loading : false
         })
 console.log(url)
        }
    }
  render() {
    return (
    <>
      <div className='container my-3'>
        <h1 className='text-center'>FreakyNews - Top Headlines</h1>
        <div className="row my-3">
            {this.state.loading && <Loader/>}
            {!this.state.loading && this.state.articles.map((element)=>{
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      publishedDate={element.publishedAt}
                    />
                  </div>
                );
            })}
        </div>     
      </div>
      <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-dark" onClick={this.handlePreviousClick} disabled={this.state.page<=1}>&laquo; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)}>Next &raquo;</button>
      </div>
    </>
    )
  }
}
