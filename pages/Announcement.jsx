import styled from "styled-components";

const Container = styled.div`
    height: 35px;
    background-color: #0047AB;
    color: white;
    display: flex; 
    align-items: center;
    justify-content: center;
    font-size: 16px; 
    font-weight: 600;
    font-family: gill sans;
    position: sticky;
`;

const Announcement = () => {
    return (
        <Container>
            1 Perfume + 5 Skincare Products @ Rs.999
        </Container>
    )
}

export default Announcement