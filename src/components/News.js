import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "England win after fairytale Broad ending",
      description:
        "England win an incredible fifth Test to level the Ashes series at 2-2 as Stuart Broad takes the final two wickets in a fairytale ending to his cricket career at The Oval.",
      url: "http://www.bbc.co.uk/sport/av/cricket/66367054",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/53FB/production/_130599412_p0g40w1j.jpg",
      publishedAt: "2023-07-31T18:22:26.9672931Z",
      content:
        "He was a one-off, something special Sir Gareth Edwards remembers Clive Rowlands. Video, 00:01:38He was a one-off, something special Sir Gareth Edwards remembers Clive Rowlands",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "'Pure joy and happiness' - Broad on fairytale finale",
      description:
        'Stuart Broad says he will leave cricket with "pure joy and happiness" after taking the final two wickets as England drew the Ashes with a 49-run victory.',
      url: "http://www.bbc.co.uk/sport/cricket/66366996",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/15503/production/_130599278_gettyimages-1583286067.jpg",
      publishedAt: "2023-07-31T18:22:26.608007Z",
      content:
        'Stuart Broad says he will leave cricket with "pure joy and happiness" after taking the final two wickets as England drew the Ashes with a 49-run victory.\r\nIn a thrilling finale, Broad removed the fin… [+1495 chars]',
    },
    {
      source: {
        id: "talksport",
        name: "TalkSport",
      },
      author: "Natasha Everitt",
      title:
        "Stuart Broad produces heroics on cricket swansong as England deny Australia Ashes series win...",
      description:
        "Stuart Broad ended his final cricket match in style as his two late wickets helped deny Australia an Ashes series win on English soil. England couldn’t win back the urn after the fourth Test …",
      url: "https://talksport.com/sport/cricket/1517506/the-ashes-result-england-australia-stuart-broad/",
      urlToImage:
        "https://talksport.com/wp-content/uploads/sites/5/2023/07/LB-comp-ashes-broad-talksport-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      publishedAt: "2023-07-31T17:35:28Z",
      content:
        "Stuart Broad ended his final cricket match in style as his two late wickets helped deny Australia an Ashes series win on English soil. \r\nEngland couldn't win back the urn after the fourth Test was ra… [+1557 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    console.log("sushant");
    this.state = {
      articles: this.articles,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Daily News - Top HeadLines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="mydesc"
              imageUrl="https://ichef.bbci.co.uk/news/1024/cpsprodpb/53FB/production/_130599412_p0g40w1j.jpg"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
