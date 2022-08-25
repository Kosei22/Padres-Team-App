import React from "react";
import HeadCarousel from "./HeadCarousel";
import classes from "./Home.css"
import { TwitterTweetEmbed } from 'react-twitter-embed'

function Home() {
    return (
        <>
            <HeadCarousel />
            <div className="middle">
                <a href="https://www.mlb.com/live-stream-games/subscribe?&affiliateId=CLUBMLBTVTAB" target="_blank">
                    <img
                        className="middleAd"
                        src="https://img.mlbstatic.com/mlb-images/image/private/t_4x1/t_w2208/mlb/qkpbwcxt8wb6df3oowex.jpg" />
                </a>

                <div className="twitter">
                    <TwitterTweetEmbed tweetId={'1513290248863711235'} />
                </div>
                <hr />
                <div className="highlight">
                    <div className="highlight-video">
                        <a href="https://www.mlb.com/padres/video/jurickson-profar-s-grand-slam?t=grand-slams" target="_blank">
                            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w640/mlb/cy1co58wrrhvseweexdn.jpg" />
                        </a>
                    </div>

                    <div className="highlight-comment">
                        <a href="https://www.mlb.com/padres/video/jurickson-profar-s-grand-slam?t=grand-slams" target="_blank">
                            <h4>Jurickson Profar's grand slam</h4>
                        </a>
                        <p>Jurickson Profar crushes a slam to left-center field to give the Padres a 4-0 lead in the top of the 2nd inning</p>
                    </div>
                </div>
                <hr />
            </div>

            <div className="insider">
                <h3>Padres Insider</h3>

                <div className="insider-up">
                    <div className="insider-up-left">
                        <a href="https://www.mlb.com/padres/schedule/2022-03" target="_blank">
                            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1024/mlb/qnyrzxzlcncyhth7csnk.jpg" width="500px" />
                        </a>
                    </div>

                    <div className="insider-up-right">
                        <a href="https://www.mlb.com/padres/ballpark/tours" target="_blank">
                            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w372/mlb/h6sbyw9vttgxjgyhgjfy.jpg" width="230px" />
                        </a>
                        <a href="https://www.mlb.com/padres/tickets/group-tickets" target="_blank">
                            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w372/mlb/tb0kypqro6urji80buwp.jpg" width="230px" />
                        </a>
                    </div>
                </div>

                <div className="insider-bottom">
                    <a>
                        <div className="insider-bottom-item">
                            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w372/mlb/qmpsroaqmomqcdjalst7.jpg" width="200px" />
                            <h5>Padres Shop</h5>
                        </div>
                    </a>

                    <a>
                        <div className="insider-bottom-item">
                            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w372/mlb/yreh3cne4sakaupxvjl6.jpg"
                                width="200px" />
                            <h5>Padres Volunteer Team</h5>
                        </div>
                    </a>
                </div>

                <hr />
                <div className="highlight">
                    <div className="highlight-video">
                        <a href="https://www.mlb.com/padres/video/jurickson-profar-s-grand-slam?t=grand-slams" target="_blank">
                            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w640/mlb/f8xhfpsvgxzrodfeg7ra.jpg" />
                        </a>
                    </div>
                    <div className="highlight-comment">
                        <a href="https://www.mlb.com/padres/video/jurickson-profar-s-grand-slam?t=grand-slams" target="_blank">
                            <h4>Blake Snell is late scratch</h4>
                        </a>
                        <p>Blake Snell is announced as a late scratch for the Padres' game against the D-backs due to left adductor tightness</p>
                    </div>
                </div>
                <hr />

                <div className="highlight">
                    <div className="highlight-video">
                        <a href="https://www.mlb.com/padres/video/jurickson-profar-s-grand-slam?t=grand-slams" target="_blank">
                            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w640/mlb/en3ydz9jkwn0ex0ksqpq.jpg" />
                        </a>
                    </div>
                    <div className="highlight-comment">
                        <a href="https://www.mlb.com/padres/video/jurickson-profar-s-grand-slam?t=grand-slams" target="_blank">
                            <h4>Jorge Alfaro's solo home run</h4>
                        </a>
                        <p>Jorge Alfaro lines a solo home run to left-center field to extend the Padres' lead to 5-0 in the top of the 2nd inning</p>
                    </div>
                </div>
                <hr />

                <div className="highlight">
                    <div className="highlight-video">
                        <a href="https://www.mlb.com/padres/video/jurickson-profar-s-grand-slam?t=grand-slams" target="_blank">
                            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w640/mlb/zumpsdvnus1etp7gzkv2.jpg" />
                        </a>
                    </div>
                    <div className="highlight-comment">
                        <a href="https://www.mlb.com/padres/video/jurickson-profar-s-grand-slam?t=grand-slams" target="_blank">
                            <h4>Guerra seals the win</h4>
                        </a>
                        <p>Javy Guerra gets David Peralta to fly out to center field and the Padres secure a 10-5 win</p>
                    </div>
                </div>
                <hr />

                <div className="highlight">
                    <div className="highlight-video">
                        <a href="https://www.mlb.com/padres/video/jurickson-profar-s-grand-slam?t=grand-slams" target="_blank">
                            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w640/mlb/phipyvqv9ooltwx16u8b.jpg" />
                        </a>
                    </div>
                    <div className="highlight-comment">
                        <a href="https://www.mlb.com/padres/video/jurickson-profar-s-grand-slam?t=grand-slams" target="_blank">
                            <h4>JBob Melvin on situational hitting</h4>
                        </a>
                        <p>Bob Melvin weighs in on the Padres' situational hitting and their offense against the D-backs to finish off the series</p>
                    </div>
                </div>

                <hr />

            </div>

        </>
    )
}
export default Home;