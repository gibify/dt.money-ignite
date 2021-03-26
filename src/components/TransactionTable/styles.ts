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

        thead {

          tr {
            display: grid;
            grid-template-columns: 1fr 1fr;

            th {
              padding: 1rem 1rem;
              border-radius: 0.25rem;
              border: 1px solid var(--shape);
            }
          }
      }

      tbody {
          tr {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;

            td {
              padding: 1rem 1rem;
              margin-bottom: 0.25rem;

              & + td {
                margin-left: 0.25rem;
              }
            }
      }

    

      

      

    }
  }
`;