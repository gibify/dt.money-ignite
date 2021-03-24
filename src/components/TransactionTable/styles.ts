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

  @media (max-width: 720px) {
    table {
      width: 50%;

      th {
        padding: 0.5rem 1rem;
      }

      td {
        padding: 0.5rem 1rem;
      }

    }
  }
`;