import './App.css';
import $ from 'jquery';

function App() {
 $(document).ready(function () {
   $(".accordion .item .header").click(function (e) {
     e.preventDefault(); // ngăn sự kiện chuyển trang
     $(this).toggleClass(".item");
     $(".accordion .item .panel").not($(this).next()).slideUp(400);
     $(this).next().slideToggle();
   });
 });

  return (
    <div className="app">
      <section className="top">
        <div className="code">
          <span>Bệnh viện chợ rẫy</span>
          <div className="wrap">
            <img src="https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"></img>
          </div>
          <span>079048.xxxxxx3433</span>
        </div>
      </section>

      <section className="mid">
        <div className="mid-wrap">
          <div className="mid-item">
            <ul>
              <li>
                <b>Thông tin bệnh nhân</b>
              </li>
              <li>
                Họ và tên: <b>Trần thị hồng ân</b>
              </li>
              <li>
                Giới tính: <b>Nữ</b>
              </li>
              <li>Bác sĩ chỉ định</li>
              <li className="ok1">Nơi gửi:</li>
            </ul>
          </div>
          <div className="mid-item">
            <ul className="mid-right">
              <li>
                Năm sinh: <b>1965</b>
              </li>
              <li className="ok2">Nơi gửi:</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bot">
        
        
        <div class="accordion">
          <div class="item active">
            <div class="header">
              <a class="text" href="#">
                <span>Kết quả: Đo hoạt độ ALT (GPT)</span>
              </a>
              <div className="seemore">
                <span>Xem chi tiết</span>
              </div>
            </div>
            <div class="panel">
              <table>
                <tr>
                  <th></th>
                  <th>Tên xét nghiệm</th>
                  <th>kết quả</th>
                  <th>đơn vị</th>
                  <th>chỉ số bình thường</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>ALT(SGPT)+</td>
                  <td>27</td>
                  <td>U/L</td>
                  <td>(5 -49)</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="item">
            <div class="header">
              <a class="text" href="#">
                <span>Kết quả: Đo hoạt độ ALT (GPT)</span>
              </a>
              <div className="seemore">
                <span>Xem chi tiết</span>
              </div>
            </div>
            <div class="panel">
              <table>
                <tr>
                  <th></th>
                  <th>Tên xét nghiệm</th>
                  <th>kết quả</th>
                  <th>đơn vị</th>
                  <th>chỉ số bình thường</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>ALT(SGPT)+</td>
                  <td>27</td>
                  <td>U/L</td>
                  <td>(5 -49)</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="item">
            <div class="header">
              <a class="text" href="#">
                <span>Kết quả: Đo hoạt độ ALT (GPT)</span>
              </a>
              <div className="seemore">
                <span>Xem chi tiết</span>
              </div>
            </div>
            <div class="panel">
              <table>
                <tr>
                  <th></th>
                  <th>Tên xét nghiệm</th>
                  <th>kết quả</th>
                  <th>đơn vị</th>
                  <th>chỉ số bình thường</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>ALT(SGPT)+</td>
                  <td>27</td>
                  <td>U/L</td>
                  <td>(5 -49)</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <span>Ngày 20 tháng 4 năm 2021</span>
        <span>
          <b>Bác sĩ điều trị</b>
        </span>
      </section>
    </div>
  );
}

export default App;
