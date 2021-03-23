import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -8rem;

    div { 
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        &.hightlight-background {
            background: var(--green);
            color: #fff;
        }

        header { 
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong { 
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
        
        } 
    }

    @media (max-width: 720px) {  
        grid-template-columns: 1fr;

        div {
            padding: 0.75rem 1rem;
        }

        strong { 
            text-align: center;
        }
        
    }

   
`;