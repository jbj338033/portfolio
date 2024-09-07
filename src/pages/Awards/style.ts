import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 4rem 0 4rem;
`

export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
`

export const AwardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid #f0f0f0;
    padding: 1rem;
    gap: 1rem;
`

export const Award = styled.div`
    display: flex;
`

export const AwardDate = styled.div`
    font-size: 1rem;
    color: #333;
    margin-top: 1rem;
`

export const AwardText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    transition: background-color 0.3s;
    padding: 1rem;
    cursor: pointer;
    border-radius: 1rem;
    gap: 0.5rem;

    :hover {
        background-color: #f0f0f0;
    }
`

export const AwardTitle = styled.div`
    font-size: 1rem;
    font-weight: bold;
`

export const AwardDescription = styled.div`
    font-size: 1rem;
    color: #333;
`