import react from 'React';
import styled from 'styled-components';

const Styled = () => {

    const Card = styled.div`

    display: flex;
    align-items: center;
    width: 40%;
    `;

    const Title = styled.h1`

    color: black;
    font-family: 'Poller One', cursive;
    `;

    const Stats = styled.div`

    display: flex;
    flex-direction: column;
    `;

    const Name = styled.h2`

    color: black;
    font-family: 'Poller One', cursive;
    `;

}

export default Styled