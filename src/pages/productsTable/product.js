import "./product.css";
import MUIDataTable from "mui-datatables";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


function ProductDash() {
	const [Data, setData] = useState();
	const [DataById, setDataById] = useState({
		name: "",
		image: "",
		price: "",
		category_id:""
	});
	const [DataPost, SetPostData] = useState({
		name: "",
		image: "",
		price: "",
        category_id:"",
	});
	const [DataEdit, SetEditData] = useState(null);
	const [Id, setId] = useState();
	const show = () => {
		var ele = document.querySelector(".none");
		ele.classList.toggle("form-add-income");
	};

	const [visibleAdd, isShowAdd] = useState(false);
	const [visibleEdit, isShowEdit] = useState(false);
	const [iconEdit, isShowIcon] = useState(true);
	const [iconAdd, isShowIconAdd] = useState(true);

	const showAdd = () => {
		if (visibleAdd === false) {
			isShowAdd(true);
		} else {
			isShowAdd(false);
		}
	};
	const showEdit = () => {
		if (visibleEdit === false) {
			isShowEdit(true);
		} else {
			isShowEdit(false);
		}
	};

	const showicon = () => {
		iconEdit ? isShowIcon(false) : isShowIcon(true);
	};
	const showiconAdd = () => {
		iconAdd ? isShowIconAdd(false) : isShowIconAdd(true);
	};

	const options = {
		filterType: "checkbox",
		responsive: "simple",
		selectableRows: "none",
		search: true,
		searchPlaceholder: "Search for Income",
		download: true,
		print: true,
		pagination: true,
		rowsPerPage: 5,
		loaded: true,
		rowsPerPageOptions: [5],
	};

	const columns = [
		{
			name: "_id",
			label: " ",
			options: {
				display: "none",
			},
		},
        {
            name: "image",
            label: "Image",
            options: {
              customBodyRender: (value) => (
                <img src={`${process.env.REACT_APP_URL}/uploads/image`} alt="Product Image" style={{ width: "100px" }} />
              ),
            },
          },
		{
			name: "name",
			label: "Name",
		},
		{
			name: "price",
			label: "Price",
		},
        {
			name: "category",
			label: "Category",
		},
		{
			name: "actions",
			label: "Actions",
			options: {
				filter: false,
				sort: false,
				empty: true,
				customBodyRender: (value, tableMeta, updateValue) => {
					return (
						<div style={{ display: "flex" }}>
							{iconEdit && (
								<Button
									sx={{ height: "40px" }}
									onClick={() => {
										axios
											.get(
												`${process.env.REACT_APP_URL}/product/${tableMeta.rowData[0]}`
											)
											.then((response) => {
												console.log(response.data.docs);
												setDataById(response.data.docs);
												setId(tableMeta.rowData[0]);
												show();
												showiconAdd();
												showEdit();
											})
											.catch((err) => {
												console.log(err.message);
											});
									}}
								>
									<AiFillEdit />
								</Button>
							)}
							<Button
								sx={{ height: "40px" }}
								onClick={() => {
									Swal.fire({
										title: "Are you sure?",
										text: "You won't be able to revert this!",
										icon: "warning",
										showCancelButton: true,
										confirmButtonColor: "#447695",
										cancelButtonColor: "#d33",
										confirmButtonText: "Yes, delete it!",
									}).then((result) => {
										if (result.isConfirmed) {
											axios
												.delete(
													`${process.env.REACT_APP_URL}/product/delete/${tableMeta.rowData[0]}`
												)
												.then((response) => {
													console.log(response);
													//   getData();
												})
												.catch((err) => {
													console.log(err.message);
												});
										}
									});
								}}
							>
								<MdDelete />
							</Button>
						</div>
					);
				},
			},
		},
	];
	// console.log(Id);
	const getData = () => {
		axios
			.get(`${process.env.REACT_APP_URL}/product/products`)
			.then((response) => {
				setData(response.data.docs);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	// console.log(DataById);
	useEffect(() => {
		getData();
	}, []);

	const handelChangePost = (e) => {
		const value = e.target.value;
		SetPostData({
			...DataPost,
			[e.target.name]: value,
		});
		console.log(DataPost);
	};

	const EditData = () => {
		axios
			.put(`${process.env.REACT_APP_URL}/product/edit/${Id}`, DataEdit)
			.then((res) => {
				console.log(res);
				getData();
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handelChangeEdit = (e) => {
		const value = e.target.value;
		SetEditData({
			...DataEdit,
			[e.target.name]: value,
		});
	};
	return (
		<>
			<div className="incomessss">
				<div className="none">
					{/* for add income */}
					{visibleAdd && (
						<form>
							<div className="head-form">
								<h2>Add Product</h2>
								<button
									onClick={() => {
										show();
										showAdd();
										showicon();
									}}
								>
									x
								</button>
							</div>
							<label htmlFor="name"> Name</label>
							<TextField
								type="text"
								name="name"
								required="required"
								onChange={handelChangePost}
							/>
							<label htmlFor="price"> Price </label>
							<TextField
								type="text"
								name="price"
								required="required"
								onChange={handelChangePost}
							/>
                            <label htmlFor="category"> Category</label>
							<TextField
								type="text"
								name="category"
								// required="required"
								onChange={handelChangePost}
							/>
							<label htmlFor="image"> Image </label>
							<TextField
								type="file"
								name="image"
								onChange={handelChangePost}
							/>
                            
							{/* <label htmlFor="status"> status</label>
            <TextField
              type="text"
              name="status"
              onChange={handelChangePost}
            />{" "} */}
							{/* <label htmlFor="patient_id"> Patient Id</label>
            <TextField
              type="text"
              name="patient_id"
              onChange={handelChangePost}
            /> */}
							<Button
								variant="outlined"
								onClick={() => {
									if (
										DataPost.name === "" ||
										DataPost.price === "" ||
										// DataPost.category_id === ""||
                                        DataPost.image === ""
									) {
										Swal.fire({
											title: "field is Empty !",
											icon: "warning",
											confirmButtonColor: "#447695",
										});
									} else {
										axios
											.post(
												`${process.env.REACT_APP_URL}/product/create`,
												DataPost
											)
											.then((res) => {
												console.log(res);
												getData();
											})
											.catch((err) => {
												console.log(err.message);
											});
										Swal.fire({
											title: "Product Added",
											icon: "success",
											iconColor: "#d0e9e7",
											confirmButtonColor: "#447695",
										});
									}
								}}
							>
								Submit
							</Button>
						</form>
					)}
					{/* for edit income */}
					{visibleEdit && (
						<form>
							<div className="head-form">
								<h2>Edit Product </h2>
								<button
									onClick={() => {
										show();
										showEdit();
										showiconAdd();
										SetEditData(null);
									}}
								>
									x
								</button>
							</div>
							<label htmlFor="productName"> Name</label>
							<TextField
								type="text"
								name="productName"
								onChange={handelChangeEdit}
								defaultValue={DataById.name}
							/>
							<label htmlFor="price"> price</label>
							<TextField
								type="text"
								name="price"
								defaultValue={DataById.price}
								onChange={handelChangeEdit}
							/>
							<label htmlFor="category"> Category</label>
							<TextField
								type="text"
								name="category"
								defaultValue={DataById.category_id}
								onChange={handelChangeEdit}
							/>
							<label htmlFor="image"> Image</label>
							<TextField
								type="file"
								name="image"
								defaultValue={DataById.image}
								onChange={handelChangeEdit}
							/>
							{/* <label htmlFor="status"> Status</label>
            <TextField
              type="text"
              name="status"
              defaultValue={DataById.status}
              onChange={handelChangeEdit}
            /> */}
							{/* <label htmlFor="patient_id"> Patient Id</label>
            <TextField
              type="text"
              name="patient_id"
              defaultValue={DataById.patient_id}
              onChange={handelChangeEdit}
            /> */}
							<Button variant="outlined" onClick={EditData}>
								Edit Product
							</Button>
						</form>
					)}
				</div>
				<div className="income_table">
					<h3 className="pagetitle">Products</h3>

					<div className="table_mui">
						<MUIDataTable
							columns={columns}
							data={Data}
							options={options}
							title={
								iconAdd && (
									<Button
										onClick={() => {
											show();
											showAdd();
											showicon();
										}}
									>
										+ Add Product
									</Button>
								)
							}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductDash;
