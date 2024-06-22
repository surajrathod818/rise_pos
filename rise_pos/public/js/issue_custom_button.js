frappe.ui.form.on('Issue', {
    refresh: function(frm) {

        if (frm.doc.status == "Open") {
            frm.add_custom_button(__('Material Request'), function () {
                frappe.new_doc('Material Request', {
                    issue: frm.doc.name,  
                    // Example fields to prefill
                    material_request_type:"Material Transfer", 
                    subject: frm.doc.subject,  
                    priority: frm.doc.priority,  
                    issue_type: frm.doc.issue_type  
                });
            }, __("Create"));
        }   
    }
});

frappe.ui.form.on('Material Request', {
    refresh: function(frm) {
        cur_frm.get_field("total_quantity").wrapper.style.width = "400px";
        cur_frm.get_field("total_amount").wrapper.style.width = "400px";
    },
    before_save: function(frm) {
        calculate_totals(frm);
    },
});
function calculate_totals(frm) {
    let total_quantity = 0;
    let total_amount = 0;

    frm.doc.items.forEach(function(item) {
        total_quantity += flt(item.qty);
        total_amount += flt(item.amount);
    });
    cur_frm.set_value('total_quantity', total_quantity);
    cur_frm.set_value('total_amount', total_amount);
    cur_frm.set_df_property('total_quantity', 'read_only', 1);
    cur_frm.set_df_property('total_amount', 'read_only', 1);
}
 
