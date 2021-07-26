import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    table{
        width: 100%;
        border-spacing: 0 0.5rem;
        th {
            color: var(--textBody);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }
        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            border-radius: .25rem;
            font-weight: 400;
            color: var(--textBody);

            &:first-child {
                color: var(--textTitle);
            }
            &.deposit {
                color: var(--green);
            }
            &.withdraw {
                color: var(--redColor);
            }

        }
    }

`