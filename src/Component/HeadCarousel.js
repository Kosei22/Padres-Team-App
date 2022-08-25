import React from "react";
import { Carousel } from 'react-bootstrap';
import classes from "./HeadCarousel.css"

function HeadCarousel() {
    return (
        <div className="carousel">
            <Carousel>

                <Carousel.Item>
                    <a href="https://www.mlb.com/padres/tickets?affiliateId=sd-opening-day-panel-031022" target="_blank">
                        <img
                            className="d-block w-100"
                            src="https://img.mlbstatic.com/mlb-images/image/private/t_5x2/t_w1536/mlb/wxzr0k48btrickbemc1c.jpg"
                            alt="First slide"
                        />
                        <h3>Opening Day at Petco Park set for ThursDay</h3>
                    </a>
                    <p>The Padres open their 2022 home schedule vs. the Braves with a 4-game set April 14-17. Season Ticket Memberships, suites, group outings and single-game tickets are on sale now.
                    </p>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://www.mlb.com/padres/tickets/season-tickets/prospective?affiliateId=sd-membership-panel-072321" target="_blank">
                        <img
                            className="d-block w-100"
                            src="https://img.mlbstatic.com/mlb-images/image/private/t_5x2/t_w1536/mlb/fun66vplh7gtsgnjf6sa.jpg"
                            alt="Second slide"
                        />
                        <h3>2022 Season Ticket Membership Available now </h3>
                    </a>
                    <p>Place a deposit today to get access to the best seating locations for the 2022 season.</p>

                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://www.mlb.com/season-pick-em?affiliateId=spe-mediawall-club-2022" target="_blank">
                        <img
                            className="d-block w-100"
                            src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1536/mlb/vi0eec3i96z2lohdnyjs.jpg"
                            alt="Third slide"
                        /></a>
                </Carousel.Item>
            </Carousel >
        </div>
    )
}

export default HeadCarousel;