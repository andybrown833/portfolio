

//     var CoreAdmin = msg.guild.roles.cache.find(r => r.name === "Core Administration");
//     var SeniorAdmin = msg.guild.roles.cache.find(r => r.name === "Senior Administration");
//     var Admin = msg.guild.roles.cache.find(r => r.name === "Administration");
//     var SeniorStaff = msg.guild.roles.cache.find(r => r.name === "Senior Staff");
//     var Staff = msg.guild.roles.cache.find(r => r.name === "Staff");
//     var Member = msg.guild.roles.cache.find(r => r.name === "Member");
//     var Recruit = msg.guild.roles.cache.find(r => r.name === "Recruit");
//     var NeedsVerify = msg.guild.roles.cache.find(r => r.name === "Needs Verification");


// function GetPermission(msg, type) {
//     var CoreAdmin = msg.guild.roles.cache.find(r => r.name === "Core Administration");
//     var SeniorAdmin = msg.guild.roles.cache.find(r => r.name === "Senior Administration");
//     var Admin = msg.guild.roles.cache.find(r => r.name === "Administration");
//     var SeniorStaff = msg.guild.roles.cache.find(r => r.name === "Senior Staff");
//     var Staff = msg.guild.roles.cache.find(r => r.name === "Staff");
//     var Member = msg.guild.roles.cache.find(r => r.name === "Member");
//     var Recruit = msg.guild.roles.cache.find(r => r.name === "Recruit");
//     var NeedsVerify = msg.guild.roles.cache.find(r => r.name === "Needs Verification");

//     if(type === 'CoreAdmin'){
//         if(msg.member.roles.cache.has(CoreAdmin.id)) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     else if(type === 'SeniorAdmin'){
//         if(msg.member.roles.cache.has(SeniorAdmin.id)) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     else if(type === 'Admin'){
//         if(msg.member.roles.cache.has(Admin.id)) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     else if(type === 'SeniorStaff'){
//         if(msg.member.roles.cache.has(SeniorStaff.id)) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     else if(type === 'Staff'){
//         if(msg.member.roles.cache.has(Staff.id)) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     else if(type === 'Member'){
//         if(msg.member.roles.cache.has(Member.id)) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     else if(type === 'Recruit'){
//         if(msg.member.roles.cache.has(Recruit.id)) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     else if(type === 'NeedsVerify'){
//         if(msg.member.roles.cache.has(NeedsVerify.id)) {
//             return true;
//         } else {
//             return false;
//         }
//     } else { return };
// }

// module.exports = {
//     GetPermission
// }