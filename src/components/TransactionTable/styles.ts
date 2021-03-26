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

      &:first-child { 
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }

  }

  @media (max-width: 620px) {
  
     thead {
       display: none;
     }

     tr {
       display: flex;
       flex-wrap: wrap;
       margin-bottom: 1rem;
     }

     td {
       width: 49%;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-between;

       text-align: center;

       &:nth-child(1){
         margin-bottom: 0.25rem;
         margin-right: 1%;
       }

       &:nth-child(2){
         margin-bottom: 0.25rem;
       }

       &:nth-child(3){
         margin-right: 1%;
       }

       span {
         margin-bottom: 1rem;
         font-weight: 500;
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