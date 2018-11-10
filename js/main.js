
/*If hash is found, store info for it's zodiac sign and run function which displays the info*/
if (location.hash != undefined) {
    switch (location.hash) {
        case "#Aquarius":
            image = "img/aquarius.jpg"
            signNameText = "Aquarius";
            strengthsText = "Progressive, original, independent, humanitarian";
            weaknessesText = "Runs from emotional expression, temperamental, uncompromising, aloof";
            likesText = "Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener";
            dislikesText = "Limitations, broken promises, being lonely, dull or boring situations, people who disagree with them";
            descriptionText = `
                <p>
                    Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems.
                </p>
                <p>
                    Although they can easily adapt to the energy that surrounds them, Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born under the Aquarius sign, look at the world as a place full of possibilities.
                </p>
                <p>
                    Aquarius is an air sign, and as such, uses his mind at every opportunity. If there is no mental stimulation, they are bored and lack a motivation to achieve the best result.
                </p>
                <p>
                    The ruling planet of Aquarius, Uranus has a timid, abrupt and sometimes aggressive nature, but it also gives Aquarius visionary quality. They are capable of perceiving the future and they know exactly what they want to be doing five or ten years from now.
                </p>
                <p>
                    Uranus also gave them the power of quick and easy transformation, so they are known as thinkers, progressives and humanists. They feel good in a group or a community, so they constantly strive to be surrounded by other people.
                </p>
                <p>
                    The biggest problem for Aquarius-born is the feeling that they are limited or constrained. Because of the desire for freedom and equality for all, they will always strive to ensure freedom of speech and movement. Aquarius-born have a reputation for being cold and insensitive persons, but this is just their defence mechanism against premature intimacy. They need to learn to trust others and express their emotions in a healthy way.
                </p>`;
            zodiacInfo(image, signNameText, strengthsText, weaknessesText, likesText, dislikesText, descriptionText);
            break;

        case "#Pisces":
            image = "img/pisces.jpg"
            signNameText = "Pisces";
            strengthsText = "Compassionate, artistic, intuitive, gentle, wise, musical";
            weaknessesText = "Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr";
            likesText = "Being alone, sleeping, music, romance, visual media, swimming, spiritual themes";
            dislikesText = "Know-it-all, being criticized, the past coming back to haunt, cruelty of any kind";
            descriptionText = `
                <p>
                    Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back.
                </p>
                <p>
                    Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity.
                </p>
                <p>
                    Their ruling planet is Neptune, so Pisces are more intuitive than others and have an artistic talent. Neptune is connected to music, so Pisces reveal music preferences in the earliest stages of life. They are generous, compassionate and extremely faithful and caring.
                </p>
                <p>
                    People born under the Pisces sign have an intuitive understanding of the life cycle and thus achieve the best emotional relationship with other beings.
                </p>
                <p>
                    Pisces-born are known by their wisdom, but under the influence of Uranus, Pisces sometimes can take the role of a martyr, in order to catch the attention. Pisces are never judgmental and always forgiving. They are also known to be most tolerant of all the zodiac signs.
                </p>`;
            zodiacInfo(image, signNameText, strengthsText, weaknessesText, likesText, dislikesText, descriptionText);
            break;

        case "#Taurus":
            image = "img/taurus.jpg"
            signNameText = "Taurus";
            strengthsText = "Reliable, patient, practical, devoted, responsible, stable";
            weaknessesText = "Stubborn, possessive, uncompromising";
            likesText = "Gardening, cooking, music, romance, high quality clothes, working with hands";
            dislikesText = "Sudden changes, complications, insecurity of any kind, synthetic fabrics";
            descriptionText = `
                <p>
                    Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses. Stable and conservative, this is one of the most reliable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction.
                </p>
                <p>
                    Taurus is an Earth sign, just like Virgo and Capricorn, and has the ability to see things from a grounded, practical and realistic perspective. They find it easy to make money and stay on same projects for years, or until they are completed. What we often see as stubbornness can be interpreted as commitment, and their ability to complete tasks whatever it takes is uncanny. This makes them excellent employees, great long-term friends and partners, always being there for people they love. Earthly note makes them overprotective, conservative, or materialistic at times, with views of the world founded on their love of money and wealth.
                </p>
                <p>
                    The ruler of Taurus is Venus, the planet of love, attraction, beauty, satisfaction, creativity and gratitude. This tender nature will make Taurus an excellent cook, gardener, lover, and artist. They are loyal and don't like sudden changes, criticism or the chase of guilt people are often prone to, being somewhat dependable on other people and emotions they seem to be unable to let go of. Still, no matter their potential emotional challenge, these individuals have the ability to bring a practical voice of reason in any chaotic and unhealthy situation.
                </p>`;
            zodiacInfo(image, signNameText, strengthsText, weaknessesText, likesText, dislikesText, descriptionText);
            break;

        default:
            errorMessage();
    }
}

/*Display zodiac info on HTML*/
function zodiacInfo(imageSrc, signNameText, strengthsText, weaknessesText, likesText, dislikesText, descriptionText) {

    document.getElementById("sign-info").style.display = "initial";

    document.getElementById("image").src = imageSrc;
    document.getElementById("sign-name").textContent = signNameText;
    document.getElementById("strengths").textContent = strengthsText;
    document.getElementById("weaknesses").textContent = weaknessesText;
    document.getElementById("likes").textContent = likesText;
    document.getElementById("dislikes").textContent = dislikesText;
    document.getElementById("description").innerHTML = descriptionText;

}

/*Display error message*/
function errorMessage() {
    document.getElementById("error-div").style.display = "block";
}