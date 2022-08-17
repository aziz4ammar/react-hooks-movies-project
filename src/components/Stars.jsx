import React from 'react'

const Stars = ({rating}) => {
    const starRating = (x) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < x) {
            stars.push(
              <span
                key={i}
                style={{ color: "gold", cursor: "pointer", fontSize: "22px" }}
              >
                ★
              </span>
            );

export default Stars