import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table { 
    width: 100%;
    border-spacing: 0 0.5rem;

    th { 
      color: var(--text-body);
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1rem;
    }

    td { 
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;


      &.deposit {
        color: var(--green);
        font-weight: 500;
      }

      &.withdraw {
        color: var(--red);
        font-weight: 500;
      }
    }

  }

  @media (max-width: 620px) {
  
     thead {
       display: none;
     }

     tr {
       display: grid;
       grid-template-columns: 1fr 1fr;
       gap: 0.25rem;
       margin-bottom: 1rem;
     }

     td {
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-between;
       
       text-align: center;

       span {
         margin-bottom: 1rem;
         font-weight: 600;
         color: var(--text-body); 
       }
      
     }
  }

  @media (min-width: 620px) {
    span {
      display: none;
    }
  }
`;