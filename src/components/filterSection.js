import { useFilterContext } from "./context/filter_context";
import { faCheck } from "react-icons/fa";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const FilterSection = () => {
	const {
            filters: { category }={},text,
		updateFilterValue,
		all_products,
	} = useFilterContext() || {};

	// get the unique values of each property
	const getUniqueData = (data, attr) => {
		let newVal = data && data.map((curElem) => {
			return curElem[attr];
		});

		if (attr === "colors") {
			// return (newVal = ["All", ...new Set([].concat(...newVal))]);
			newVal = newVal.flat();
		}

		return (newVal = ["Hot Beverage", "Cold Beverage", ...new Set(newVal)]);
	};

	const categoryData = getUniqueData(all_products._id, "category");
    

	return (
		<>
			<Wrapper>
				<div className="filter-search">
					<form onSubmit={(e) => e.preventDefault()}>
						<input
							type="text"
							name="text"
							placeholder="Search"
							value={text}
							onChange={updateFilterValue}
						/>
					</form>
				</div>

				<div className="filter-category">
					<h3>Category</h3>
					<div>
						{categoryData.map((curElem, index) => {
							return (
								<button
									key={index}
									type="button"
									name="category"
									value={curElem}
									className={
										curElem === category ? "active" : ""
									}
									onClick={updateFilterValue}
								>
									{curElem}
								</button>
							);
						})}
					</div>
				</div>
			</Wrapper>
		</>
	);
};


const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
    //   width: 160%;
      margin-right:10px;

    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      width: 160%;


      button {
        border: none;
        background-color: var(--accent1);
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color:red;
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: red;
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: red;
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }

  @media (max-width: 768px) {
    .filter-category div {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .filter-category div {
      width: auto;
    }

    .filter-search input {
      width: 100%;
    }
  }

`;

export default FilterSection;

