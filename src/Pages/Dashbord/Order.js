import React from 'react';

const Order = ({order}) => {
    const{tool,user,userName,stock,quantity}=order;
    return (
        <tr>
        <th>1</th>
        <td>{quantity}</td>
        <td>{tool}</td>
        <td></td>
        <td></td>
      </tr>
    );
};

export default Order;