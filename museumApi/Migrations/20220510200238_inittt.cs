using Microsoft.EntityFrameworkCore.Migrations;

namespace museumApi.Migrations
{
    public partial class inittt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Wings",
                columns: new[] { "Id", "ArtType", "Description", "ImageUrl", "Name", "Type" },
                values: new object[,]
                {
                    { 1, 2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ante commodo, venenatis dolor id, sodales velit. Praesent blandit tortor at nibh mollis, a consequat diam efficitur. Nullam vehicula cursus mi nec semper. Suspendisse dolor diam, aliquet at magna a, vestibulum gravida elit. Integer quam urna, sagittis vitae dictum at, sodales convallis urna. Ut elit massa, ultrices nec odio quis, rhoncus cursus leo. Curabitur sollicitudin lectus felis, at placerat arcu volutpat non. In congue urna odio, vel tempus mauris ullamcorper eget. Aenean porta non turpis eget ornare. Donec euismod mi lacinia, scelerisque lorem et, suscipit sem. Suspendisse sit amet dui a neque ullamcorper porttitor. Ut risus nibh, commodo nec lectus ut, vestibulum commodo tellus. Phasellus rhoncus arcu sit amet mollis luctus. Vivamus sed tempor sapien. Nullam mi augue, pulvinar a aliquet finibus, vehicula a mauris. Donec at elementum justo, vel aliquet orci.Sed nec leo nibh. Mauris sit amet velit faucibus, aliquam sem eget, finibus urna. Quisque neque magna, fermentum sed ornare a, tempor nec ex. Nam sit amet scelerisque augue, et semper est. Nunc gravida iaculis ligula sed maximus. Integer id accumsan arcu, a convallis ante. Donec semper mollis risus sed imperdiet. Proin at elit suscipit, rhoncus erat non, ornare nisl. Nullam rhoncus enim sit amet vivera pulvinar.", "https://images.unsplash.com/photo-1616464598261-2e345113fa3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80", "American vase", 1 },
                    { 2, 2, "Sed tincidunt cursus lorem, ullamcorper ultrices sapien mollis sed. Sed erat justo, laoreet et ornare eu, tincidunt vitae magna. Mauris neque dolor, laoreet ac enim quis, sollicitudin ultrices ligula. Suspendisse sit amet nibh sit amet nulla semper bibendum quis eget massa. Vestibulum ac bibendum mauris. Pellentesque imperdiet scelerisque vehicula. Morbi posuere diam non nulla finibus, sit amet suscipit augue fringilla. Donec quis posuere orci, et bibendum metus. Cras fringilla lectus viverra tincidunt auctor. Sed accumsan purus quis lectus ultricies egestas. Morbi sed mi eu enim finibus facilisis. Integer ac enim non quam volutpat lacinia. Quisque lorem ipsum, gravida sit amet lobortis sed, convallis in lacus. Vivamus id nibh ultrices, varius tellus sit amet, ullamcorper lacus. Nam aliquet dui nec accumsan interdum. Pellentesque congue ipsum ut libero volutpat semper. Morbi fermentum vestibulum libero a aliquet. Mauris eu lorem nec felis laoreet pharetra. Sed libero ipsum, consequat vel placerat vitae, euismod sit amet dolors. Nam cursus tortor ut justo commodo, vitae consequat felis lobortis. In hac habitasse platea dictumst.", "https://images.unsplash.com/photo-1618674622469-d7fd1a22fcf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80", "English Vase", 2 },
                    { 3, 2, "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sollicitudin velit id dui faucibus, a tempor odio fermentum. Proin vehicula risus felis, at suscipit metus facilisis ac. Phasellus at velit enim. Etiam varius purus ut arcu efficitur eleifend. Mauris et orci interdum, sodales urna sit amet, ultrices lectus. Nam quis nulla vel diam rutrum pulvinar. Vivamus cursus elit sed viverra elementum. Morbi a nunc ante. In hac habitasse platea dictumst. Nunc auctor risus sed elit pulvinar pulvinar. Vestibulum lacinia iaculis auctor. Quisque nec nullila iaculis, consectetur velit ac, accumsan velit. Etiam orci lectus, mollis vitae tincidunt mollis, pharetra sed ipsum. Nulla facilisi. Duis viverra quam gravida lobortis dapibus.", "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", "French Vase", 2 },
                    { 4, 1, "Nulla dictum, leo at egestas convallis, massa mauris rhoncus ex, ut bibendum nisl metus eu nisl. Aenean sapien mauris, bibendum id metus vitae, ultricies condimentum arcu. Interdum et malesuada fames ac ante ipsum prmis in faucibus. Suspendisse tempus luctus magna, non luctus dui rutrum quis. Aliquam a elementum ex. Vestibulum varius justo lobortis odio hendrerit, vitae lobortis ante convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam viverra laoreet odio non tincidunt. Donec suscipit ultricies elit, et pharetra lorem maximus ac. Nullam feugiat nisl ac mattis facilisis. Maecenas tellus risus, varius vel nunc id, consequat ultricies lectus. Nullam congue libero nec orci pulvinar, et vulputate ligula euismod. Maecenas porta bibendum lorem in ultricies.", "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80", "American painting", 1 },
                    { 5, 1, "Donec pulvinar lorem ut nisl convallis fermentum. Nunc scelerisque, sem eu blandit auctor, nunc erat imperdiet ligula, ut congue ex purus eu neque. Cras eget vulputate orci. Fusce ac elit pretium, lacinia velit id, venenatis libero. Sed egestas, elit id posuere hendrerit, risus mauris dapibus purus, et malesuada dolor neque id ligula. Donec vel lectus in justo feugiat efficitur. Quisque molestie enim risus, volutpat rutrum velit condimentum sed. Integer at risus lorem. Cras sit amet neque tellus. Donec elementum enim sit amet arcu vestibulum, vel euismod mi auctor.", "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=741&q=80", "English painting", 2 },
                    { 6, 1, "Nunc nec maximus nisi. Duis nec tristique metus, sit amet porttitor quam. Vestibulum eu pulvinar velit, eget gravida ex. Ut porttitor tempus nisl lobortis consectetur. Etiam volutpat eget ipsum posuere consequat. Sed finibus risus et lacus efficitur vestibulum. Aliquam augue nisl, congue a molestie id, convallis quis ex. Nulla eget tincidunt sem, et finibus quam. Mauris laoreet odio sapien. Phasellus varius congue sodales. Vivamus sollicitudin pulvinar ex. Nullam non metus in dolor mollis tincidunt. Nam vitae rhoncus libero. Nunc ut auctor velit.Ut a neque vel diam fermentum hendrerit. Integer blandit leo a sodales varius. Ut sed pharetra mi, a faucibus orci. Vivamus nisi nulla, pharetra sed aliquam at, dapibus eget ligula. Nulla vulputate, tortor ac fermentum tempor, nulla mi cursus est, quis pharetra enim sem a purus. Etiam varius quam a urna rhoncus, a suscipit nulla tristique. Nunc volutpat venenatis elit, ac gravida metus feugiat vel. Vestibulum ultricies, velit at imperdiet pharetra, dui felis fringilla elit, non porttitor turpis eros a turpis. Sed imperdiet feugiat neque, at scelerisque nisi finibus quis. Nullam rutrum aliquet dui dignissim euismod. Nunc quis justo lacus.Ut in arcu ac neque ullamcorper venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris malesuada placerat massa eu hendrerit. Pellentesque nec sapien nibh. Phasellus placerat nisl at tortor lobortis, at feugiat nulla accumsan. Vestibulum quis pharetra lorem. Nam quam eros, ullamcorper vel rutrum ut, vehicula id sapien. Morbi feugiat lacinia nisl quis dapibus. Duis sit amet condimentum nibh, eget bibendum libero. Integer dapibus sit amet lacus in faucibus. Nulla et dignissim tortor. Morbi id libero nec dui sodales dapibus. In commodo nulla quis tellus euismod scelerisque. Suspendisse a facilisis metus. Cras rhoncus vel arcu eget congue. Donec porta ante in lacus maximus, eu sodales enim posuere.", "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", "French painting", 2 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Wings",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Wings",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Wings",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Wings",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Wings",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Wings",
                keyColumn: "Id",
                keyValue: 6);
        }
    }
}
