import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from 'react-router-dom';
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://bit.ly/3SiUdon" alt="" />
        <div className="user">
          <img src="https://bit.ly/3rbTtoX" alt="" />
          <div className="info">
            <span>Mouh</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <ModeEditOutlineIcon />
            </Link>
            <DeleteIcon />
          </div>
        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, eius!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis pariatur nulla et minus vel perspiciatis autem placeat harum dolore. Ducimus suscipit, nemo id voluptatum culpa pariatur ea cum sit animi incidunt dolores asperiores nisi commodi veritatis quisquam deserunt molestiae quo maiores neque reiciendis quasi facilis soluta! Labore rem vitae soluta repellendus assumenda temporibus nihil, suscipit dignissimos maiores saepe! Aperiam vitae necessitatibus incidunt quasi laborum, neque in voluptatem repudiandae, sapiente facilis ad magni beatae provident vel suscipit recusandae nam, corrupti voluptate! Amet animi facilis dignissimos temporibus, deleniti impedit expedita reiciendis, eligendi laboriosam quaerat nemo velit ut sit. Blanditiis tempora doloribus possimus fugit fugiat minima magni doloremque esse voluptas itaque nobis quia, consectetur quos ducimus nulla deserunt suscipit animi alias! Error fugit excepturi ipsam earum id eum neque, hic ullam suscipit cum, esse totam. Natus rem quidem officiis eum iusto, ipsum, aliquam non totam, explicabo quaerat eaque? Eum veniam aliquam incidunt id quia ipsum. Deleniti harum dolore quae libero animi voluptas eos voluptate accusamus voluptatem aperiam odit quo, mollitia fugit tempora quod molestias qui quos quam iusto iure omnis cumque sed voluptates! Dolor ratione, asperiores inventore neque rerum nisi quasi soluta dolorum! Ullam suscipit saepe aliquam possimus quis. Debitis aliquid natus deleniti perferendis! Nulla ex magni, alias numquam, dolorem voluptatem velit recusandae libero officia ratione cum modi consequatur temporibus facere, at iure omnis quisquam sed. Tenetur dicta maiores non dolorum tempora nam omnis iure placeat earum, quisquam optio error possimus reiciendis assumenda voluptatum voluptas, enim deleniti expedita ipsum natus voluptates qui est magnam excepturi. Facilis sunt facere repellendus impedit doloremque quis ipsum illum perferendis aut tenetur debitis laborum necessitatibus quos dolorum minus, nesciunt sequi blanditiis, voluptas tempore magni? Quo ex, ratione odio facere libero necessitatibus accusantium sunt error, unde consectetur perspiciatis sapiente amet! Inventore quas quo pariatur similique recusandae, voluptate incidunt sunt facilis, laboriosam id illo quia, cum corporis. Asperiores officia suscipit a quibusdam omnis? Accusantium ut dolorum animi, corporis nemo pariatur molestiae odit maiores veritatis iste sequi quaerat excepturi minus quam. Unde, corporis molestiae repudiandae deleniti consequuntur laboriosam enim eos est doloribus officiis pariatur excepturi maxime provident saepe assumenda nobis sequi esse ut temporibus alias ex? Quia error animi, eveniet qui, nisi veritatis dicta aliquam eum, quasi saepe quo quisquam. Quae voluptatem veritatis neque hic necessitatibus distinctio, velit inventore tempora quibusdam aliquam aliquid possimus quod autem explicabo at nobis! Sit maxime pariatur debitis animi necessitatibus vel. Reiciendis corrupti aperiam excepturi quia fugiat. Error maiores dicta eum accusamus eos consequatur quidem fuga commodi exercitationem ratione. Totam molestiae dicta cumque, dignissimos cupiditate animi sit cum velit et illo aut, dolore deleniti qui optio voluptatibus tempore consequatur laborum esse earum. Earum magni illum nobis laborum numquam voluptatum odit. Maxime minus consequatur deserunt alias dicta ipsam tempora? Pariatur, quae eos? Iste voluptatum illo velit nisi reprehenderit explicabo natus autem maxime labore porro provident debitis magnam quis, voluptatem harum unde, voluptate incidunt iure optio consequuntur quaerat ut voluptas blanditiis! Dolorem harum quaerat pariatur ullam esse cum id quasi. Veritatis quia fuga, repellat deleniti necessitatibus obcaecati nam placeat nihil deserunt cumque unde molestias provident natus eos laboriosam est saepe, eveniet dignissimos accusantium impedit! Tempora, obcaecati sed modi quaerat earum fuga molestias tenetur voluptate optio ex veritatis voluptatem hic nostrum, eveniet perferendis possimus placeat sequi officiis magnam itaque nulla doloribus non. Temporibus doloremque illum explicabo accusamus unde aut voluptas iure ab vel facilis nam dolorum quam, laboriosam incidunt ut quaerat? Esse, laboriosam! Id aliquid natus placeat magnam qui! Modi provident voluptatum eos. Iusto commodi suscipit perspiciatis autem blanditiis optio modi esse veniam? Facere commodi ea quibusdam sunt, vitae labore molestiae dolorum harum esse. Enim fugiat molestiae culpa accusantium.</p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
