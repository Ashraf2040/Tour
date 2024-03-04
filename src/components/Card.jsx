"use client";

import styles from "./card.module.css"

function CardItem() {
  return (
    <div className={styles.row}>
        <div className={styles.card}>
            <h4>What is a Frontend Develoment?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam porro similique aliquid debitis ipsam soluta dolorum ipsa! Voluptate, suscipit iure.</p>

            <button>Read More</button>
        </div>
    </div>
  );
}

export default CardItem;
