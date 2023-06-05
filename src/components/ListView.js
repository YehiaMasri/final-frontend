import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../style/button.js";

const ListView = ({ products }) => {
	return (
		<Wrapper className="section">
			<div className="container grid">
				{products &&
					products.map((curElem) => {
						const { id, name, image, price, description } = curElem;
						return (
							<div className="card grid grid-two-column">
								<figure>
									<img
										src={`${process.env.REACT_APP_URL}/${image}`}
										alt={name}
									/>
								</figure>

								<div className="card-data">
									<h3>{name}</h3>
									<p>price: {price}$</p>
									<p>{description}...</p>

									<NavLink
										to={`/singleproduct/${id}`}
										className="btn-main"
									>
										<Button className="btn">
											Read More
										</Button>
									</NavLink>
								</div>
							</div>
						);
					})}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding: 9rem 0;

	.container {
		max-width: 120rem;
	}

	.grid {
		gap: 3.2rem;
		justify-items: center; /* Center items horizontally */
		align-items: center;
	}

	figure {
		width: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		overflow: hidden;
		transition: all 0.5s linear;
		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 0%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
			transition: all 0.2s linear;
			cursor: pointer;
		}
		&:hover::after {
			width: 100%;
		}
		&:hover img {
			transform: scale(1.2);
		}
		img {
			max-width: 90%;
			margin-top: 1.5rem;
			height: 20rem;
			transition: all 0.2s linear;
		}
	}

	.card {
		border: 0.1rem solid rgb(170 170 170 / 40%);
		width: 500px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-item: center;

		.card-data {
			padding: 0 2rem;
		}

		h3 {
			margin: 2rem 0;
			font-weight: 300;
			font-size: 2.4rem;
			text-transform: capitalize;
		}

		.btn {
			margin: 2rem 0;
			background-color: var(--primary);
			border: 0.1rem solid rgb(98 84 243);
			display: flex;
			justify-content: center;
			align-items: center;
			color: var(--accent1);

			&:hover {
				background-color: var(--accent);
			}

			&:hover a {
				color: #fff;
			}
			a {
				color: rgb(98 84 243);
				font-size: 1.4rem;
			}
		}

		.btn-main .btn:hover {
			color: #fff;
		}
	}
    @media (max-width: 767px) {
        .grid {
          grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
          gap: 2rem;
        }
    
        figure img {
          height: 15rem;
        }
      }
    
      @media (max-width: 480px) {
        .grid {
          grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
          gap: 1rem;
        }
    
        figure img {
          height: 12rem;
        }
      }
`;

export default ListView;
