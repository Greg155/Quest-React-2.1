import React from 'react';
import './QuoteCard.css';
import PropTypes from 'prop-types';

function QuoteCard(props) {
    return(
        <figure class="QuoteCard">
            <img src={props.image} alt={props.character} />
            <figcaption>
                <blockquote>{props.quote}</blockquote>
                <cite>{props.characterFirstName + '' + props.characterLastName}</cite>
            </figcaption>
        </figure>
    );
}

QuoteCard.prototype = {
    characterFirstName: PropTypes.string.isRequired,
    characterLastName: PropTypes.string.isRequired,
};

export default QuoteCard;
