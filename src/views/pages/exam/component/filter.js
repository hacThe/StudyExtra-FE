import React from "react";
import { List, ListItemText, Button, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

function Filter(props) {
    const menuList = ["Tất cả", "Lớp 10", "Lớp 11", "Lớp 12", "Luyện thi", "Khác", "Khóa học của bạn"];

    return (
        <form className="filter">
            <div className="filter-nav1">
                <List className="list-btn">
                    {menuList.map((item, index) => (
                        <ListItemText key={index} className="filter-item">
                            <Button className={"filter-btn" + (props.typeExam === item ? ' btn-active' : '')} onClick={() => props.setTypeExam(item)}>
                                {item}
                            </Button>
                        </ListItemText>
                    ))}
                </List>
            </div>

            <div className="filter-nav2">
                <div className='document-sorting'>
                    <div className='sorting-label'>Sắp xếp theo</div>
                    <select
                        id="demo-simple-select"
                        className='sorting-control'
                        onChange={(e) => props.setSortExam(e.target.value)}
                    >
                        <option className="sorting-item" value={1}>Mới nhất</option>
                        <option className="sorting-item" value={2}>Cũ nhất</option>
                        <option className="sorting-item" value={3}>Xem nhiều nhất</option>
                    </select>
                </div>

                <div className="check-list">
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="chua hoan thanh"
                            name="radio-buttons-group"
                            className="radio-group"
                        >
                            <FormControlLabel value="chua hoan thanh" control={<Radio />} label="Chưa hoàn thành" />
                            <FormControlLabel value="da hoan thanh" control={<Radio />} label="Đã hoàn thành" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </form>
    )
};

export default Filter;