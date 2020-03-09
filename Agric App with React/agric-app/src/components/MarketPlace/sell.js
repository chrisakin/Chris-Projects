import React, { Component } from 'react';
import './MarketPlace.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { FormGroup } from "react-bootstrap";
import FormControl from 'react-bootstrap/FormControl'

export default class SellProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }
    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt='img'/>);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
            <div>
                <div className="bg">
                    <div className='jumbo-wrapper'>
                        <div className='text'>
                            <button className='title'>GET STARTED<br />SELLING WITH FARMLY.</button>
                            <button className='description'>Apply to be a Farmly seller for the possibility of showcasing your harvest and generating additional income</button>
                            <button>Apply Now</button>
                        </div>
                    </div>

                    <hr className="hr-text" data-content="REGISTRATION" />
                    <Form.Label className="container">
                        <Form.Group controlId="formBasicProductName">
                            <Form.Label>Product Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter ProductName" />

                        </Form.Group>

                        <Form.Group controlId="formGroupCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select">
                                <option>Fruits and Vegetables</option>
                                <option>Grains and Cereals</option>
                                <option>Tuber and Roots</option>
                                <option>Cash Crops</option>
                                <option>Livestock</option>

                            </Form.Control>
                            <Form.Text className="text-muted">
                                Please select the category your item belongs to
                             </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Price" />
                        </Form.Group>
                        <FormGroup>
                            <Form.Label>Product Image</Form.Label>
                            <FormControl name="images[]" type="file" multiple onChange={this.handlePhotos} />
                        </FormGroup>
                        <div className="imgPreview">
                            {$imagePreview}
                        </div>
                        <Button variant="success" type="submit" block
                            bsSize="large">
                            Submit
  </Button>
                    </Form.Label>
                </div>


            </div>
        );
    }
}
