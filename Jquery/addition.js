$(document).ready(function () {
    $('.incomeStatement').on('keyup', function(){       
        var sum=0;       
        $('.incomeStatement').each(function(){
            sum+=Number($(this).val());
        })
        $("#add_TotalIncome").val(sum.toFixed(2));
    });
});



// (function() {
//     function GetTotalIncome() {
//         let sum = 0;
//         $(".incomeStatement").each(function() {
//             sum += Number($(this).val());
//         })
//         $("#add_TotalIncome").val(sum.toFixed(2));
//    }
//    $(document).on("keyup", ".incomeStatement", function(){
//        GetTotalIncome();
//    });
//     function GetTotalExpense() {
//         let sum = 0;
//         $(".expenseStatement").each(function() {
//             sum += Number($(this).val());
//         })
//         $("#add_TotalExpenses").val(sum.toFixed(2));
//    }
//    $(document).on("keyup", ".expenseStatement", function(){
//        GetTotalExpense();
//    });
// })();       